"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, type FormEvent } from "react";
import { riceProfiles } from "../../data/rice";

type BuyerEnquiry = {
  name:string; company:string; email:string; phone:string; category:string;
  variety:string; processing:string; quantity:string; unit:string; destination:string;
  packaging:string; moisture:string; broken:string; timeline:string; terms:string; notes:string;
};
const empty:BuyerEnquiry={name:"",company:"",email:"",phone:"",category:"",variety:"",processing:"",quantity:"",unit:"MT",destination:"",packaging:"",moisture:"",broken:"",timeline:"",terms:"",notes:""};
const safe=(value:string)=>value.trim().replace(/[\r\n]+/g," ").slice(0,3000);
function formatEnquiry(q:BuyerEnquiry){
  const rows:[string,string][]=[
    ["Buyer name",q.name],["Company",q.company],["Email",q.email],["Phone",q.phone],
    ["Rice category",q.category],["Variety / grain identity",q.variety],["Processing",q.processing],
    ["Quantity",q.quantity+" "+q.unit],["Delivery destination",q.destination],
    ["Packaging",q.packaging],["Maximum moisture (%)",q.moisture],
    ["Maximum broken (%)",q.broken],["Required delivery date",q.timeline],
    ["Incoterm / delivery basis",q.terms],["Other acceptance criteria",q.notes],
  ];
  return "RICE BUYER ENQUIRY — DRAFT (NOT SUBMITTED)\n"+rows.map(([label,value])=>label+": "+(safe(value)||"Not specified")).join("\n")+
  "\n\nNext steps: confirm sample method, available lot, documented quality requirements, freight/payment terms and quotation validity.";
}
function EnquiryForm(){
  const search=useSearchParams();
  const requested=search.get("category")||"";
  const initial=riceProfiles.some(p=>p.name===requested)?requested:"";
  const [q,setQ]=useState<BuyerEnquiry>({...empty,category:initial});
  const [draft,setDraft]=useState("");
  const [copyStatus,setCopyStatus]=useState("");
  const [delivery,setDelivery]=useState("");
  const [busy,setBusy]=useState(false);
  function set<K extends keyof BuyerEnquiry>(field:K,value:BuyerEnquiry[K]){setQ(old=>({...old,[field]:value}));setDraft("");setCopyStatus("");}
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setDraft(formatEnquiry(q));setCopyStatus("");}
  async function deliver(){setBusy(true);setDelivery("");try{const r=await fetch("/api/enquiries",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...q,website:""})});const json=await r.json();setDelivery(json.message||json.error||"Delivery not confirmed.");}catch{setDelivery("Delivery not confirmed. Copy the draft instead.");}finally{setBusy(false)}}
  async function copy(){try{await navigator.clipboard.writeText(draft);setCopyStatus("Draft copied to clipboard.");}catch{setCopyStatus("Clipboard unavailable. Select and copy the draft below.");}}
  return <main className="inner-page">
    <span className="eyebrow">05 / BUYER ENQUIRIES</span><h1 className="page-title">Start with the <em>specification.</em></h1>
    <p className="intro">Build a structured purchasing requirement that a supplier can quote against. This prototype creates a text draft on your device. It does not transmit, save, or email your information.</p>
    <form className="contact-form enquiry-form" onSubmit={submit}>
      <fieldset><legend>01 / Buyer details</legend><div className="form-two">
        <label>Your name *<input required autoComplete="name" maxLength={100} value={q.name} onChange={e=>set("name",e.target.value)}/></label>
        <label>Company *<input required autoComplete="organization" maxLength={150} value={q.company} onChange={e=>set("company",e.target.value)}/></label>
        <label>Email *<input required type="email" autoComplete="email" maxLength={200} value={q.email} onChange={e=>set("email",e.target.value)}/></label>
        <label>Phone (optional)<input type="tel" autoComplete="tel" maxLength={35} value={q.phone} onChange={e=>set("phone",e.target.value)}/></label>
      </div></fieldset>
      <fieldset><legend>02 / Product requirements</legend><div className="form-two">
        <label>Rice category *<select required value={q.category} onChange={e=>set("category",e.target.value)}><option value="">Select category</option>{riceProfiles.map(p=><option key={p.slug} value={p.name}>{p.name}</option>)}</select></label>
        <label>Variety / grain identity *<input required maxLength={120} placeholder="Specify variety or say 'to be confirmed'" value={q.variety} onChange={e=>set("variety",e.target.value)}/></label>
        <label>Processing<select value={q.processing} onChange={e=>set("processing",e.target.value)}><option value="">To be confirmed</option><option>Raw/white</option><option>Steamed</option><option>Parboiled</option><option>Brown</option><option>Other / to be specified</option></select></label>
        <label>Packaging<input maxLength={120} placeholder="e.g. 25 kg woven bags" value={q.packaging} onChange={e=>set("packaging",e.target.value)}/></label>
        <label>Maximum moisture (%)<input type="number" step="0.1" min="0" max="100" value={q.moisture} onChange={e=>set("moisture",e.target.value)}/></label>
        <label>Maximum broken grains (%)<input type="number" step="0.1" min="0" max="100" value={q.broken} onChange={e=>set("broken",e.target.value)}/></label>
      </div></fieldset>
      <fieldset><legend>03 / Quantity and delivery</legend><div className="form-two">
        <label>Required quantity *<input required type="number" min="0.001" step="any" max="1000000" value={q.quantity} onChange={e=>set("quantity",e.target.value)}/></label>
        <label>Unit *<select value={q.unit} onChange={e=>set("unit",e.target.value)}><option value="MT">Metric tonnes (MT)</option><option value="kg">Kilograms (kg)</option><option value="quintals">Quintals</option></select></label>
        <label>Destination / delivery point *<input required maxLength={160} placeholder="City, country or port" value={q.destination} onChange={e=>set("destination",e.target.value)}/></label>
        <label>Required date<input type="date" value={q.timeline} onChange={e=>set("timeline",e.target.value)}/></label>
        <label>Delivery basis<input maxLength={100} placeholder="Ex-warehouse, delivered or Incoterm" value={q.terms} onChange={e=>set("terms",e.target.value)}/></label>
      </div><label>Additional acceptance criteria<textarea rows={4} maxLength={3000} value={q.notes} onChange={e=>set("notes",e.target.value)} placeholder="Inspection protocol, grain length, certificates or specific requirements"/></label></fieldset>
      <button type="submit">Prepare enquiry draft ↗</button>
      <small>Required fields are marked *. No enquiry is sent. Confirm any applicable export standards and commercial terms before making an offer.</small>
    </form>
    {draft&&<section className="draft-section" aria-live="polite"><h2>Your enquiry draft</h2><p>Review this draft, then copy it into your preferred email or messaging channel.</p><textarea readOnly aria-label="Generated enquiry draft" value={draft} rows={19}/><button type="button" onClick={copy}>Copy enquiry draft</button><button type="button" disabled={busy} onClick={deliver}>{busy?"Checking delivery…":"Send enquiry (when configured)"}</button><p role="status">{delivery}</p><p role="status">{copyStatus}</p></section>}
  </main>;
}
export default function Page(){return <Suspense fallback={<main className="inner-page"><p>Loading enquiry form…</p></main>}><EnquiryForm/></Suspense>;}
