import { NextRequest, NextResponse } from "next/server";
import { riceProfiles } from "../../../data/rice";
export const runtime = "nodejs";
const fields = ["name","company","email","phone","category","variety","processing","quantity","unit","destination","packaging","moisture","broken","timeline","terms","notes"] as const;
type Key = typeof fields[number];
const required:Key[]=["name","company","email","category","variety","quantity","unit","destination"];
const limits:Partial<Record<Key,number>>={name:100,company:150,email:200,phone:35,category:80,variety:120,processing:60,quantity:30,unit:12,destination:160,packaging:120,moisture:20,broken:20,timeline:20,terms:100,notes:3000};
function response(error:string,status:number){return NextResponse.json({ok:false,error},{status,headers:{"Cache-Control":"no-store"}})}
export async function POST(req:NextRequest){
  if(process.env.ENABLE_ENQUIRY_DELIVERY!=="true")return response("Online delivery is disabled pending security and privacy approval. Copy your draft instead.",503);
  const apiKey=process.env.RESEND_API_KEY,from=process.env.ENQUIRY_FROM_EMAIL,to=process.env.ENQUIRY_TO_EMAIL;
  if(!apiKey||!from||!to)return response("Online delivery is not configured. Copy your draft instead.",503);
  const origin=req.headers.get("origin");
  if(origin){try{if(new URL(origin).origin!==req.nextUrl.origin)return response("Invalid origin.",403)}catch{return response("Invalid origin.",403)}}
  const length=Number(req.headers.get("content-length")||0);if(length>12000)return response("Request is too large.",413);
  let data:unknown;try{data=await req.json()}catch{return response("Invalid JSON.",400)}
  if(!data||typeof data!=="object"||Array.isArray(data))return response("Invalid enquiry.",400);
  const payload=data as Record<string,unknown>;
  if(payload.website)return NextResponse.json({ok:true,message:"Thank you."});
  const clean={} as Record<Key,string>;
  for(const key of fields){const v=payload[key];if(typeof v!=="string"||v.length>(limits[key]??300)){return response("Invalid field: "+key,400)}clean[key]=v.trim()}
  if(required.some(k=>!clean[k]))return response("Complete all required fields.",400);
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email))return response("Invalid email.",400);
  if(!riceProfiles.some(p=>p.name===clean.category))return response("Invalid rice category.",400);
  if(!["kg","MT","quintals"].includes(clean.unit))return response("Invalid quantity unit.",400);
  const quantity=Number(clean.quantity);if(!Number.isFinite(quantity)||quantity<=0||quantity>1000000)return response("Invalid quantity.",400);
  for(const k of ["moisture","broken"] as const){if(clean[k]&&(Number.isNaN(Number(clean[k]))||Number(clean[k])<0||Number(clean[k])>100))return response("Invalid percentage.",400)}
  if(clean.timeline&&!/^\d{4}-\d{2}-\d{2}$/.test(clean.timeline))return response("Invalid date.",400);
  const text=fields.map(key=>key.toUpperCase()+": "+clean[key].replace(/[\r\n]/g," ")).join("\n");
  try{
    const result=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":"Bearer "+apiKey,"Content-Type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:[clean.email],subject:"Rice enquiry — "+clean.category,text}),signal:AbortSignal.timeout(10000),cache:"no-store"});
    if(!result.ok){console.error("Enquiry provider error",result.status);return response("Delivery was not confirmed. Please copy your draft and contact us directly.",502)}
    return NextResponse.json({ok:true,message:"Enquiry accepted by email provider."},{headers:{"Cache-Control":"no-store"}});
  }catch{ return response("Delivery could not be confirmed. Please copy your draft.",502)}
}
