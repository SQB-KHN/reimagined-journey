import Link from "next/link";

const pillars = [
  {number:"01",title:"Define the specification",body:"Agree variety, grade, moisture, broken percentage, packaging, destination and acceptance method before quoting.",link:"/quality",cta:"Explore quality"},
  {number:"02",title:"Document the source",body:"Work toward traceable lots, inspection records and commercial terms that both sides can understand.",link:"/approach",cta:"See our approach"},
  {number:"03",title:"Prepare for the market",body:"Consider the documents, product conditions and regulatory checks applicable to each trading route.",link:"/compliance",cta:"Review compliance"},
];

const publications=[
  {kicker:"QUALITY / FIELD NOTE 01",title:"What makes rice commercially acceptable?",summary:"Translate buyer expectations into a testable product specification."},
  {kicker:"PROCUREMENT / FIELD NOTE 02",title:"A purchase price is not a landed cost.",summary:"Understand freight, packing, shrinkage and the cash conversion cycle."},
  {kicker:"TRADE / FIELD NOTE 03",title:"Documentation before dispatch.",summary:"A practical framework for building a transaction evidence trail."},
];

export default function Home(){
  return <main id="main">
    <section className="hero hero-v2" aria-labelledby="hero-heading">
      <div className="hero-top"><span className="eyebrow"><span className="asterisk" aria-hidden="true">✳</span> FARMGATE TO MARKET</span><span className="eyebrow">INDIA · RICE · RESPONSIBLE TRADE</span></div>
      <div className="hero-main">
        <div className="hero-copy">
          <p className="overline">A MORE CONSIDERED WAY TO TRADE</p>
          <h1 id="hero-heading">Better rice trade<br/>starts with<br/><em>better questions.</em></h1>
          <p className="hero-deck">An emerging rice-sourcing venture focused on clarity: what is being bought, how it is assessed, and what it takes to deliver.</p>
          <div className="hero-actions"><Link className="solid-link" href="/quality">Explore quality standards <span aria-hidden="true">↗</span></Link><Link className="subtle-link" href="/approach">Our approach <span aria-hidden="true">→</span></Link></div>
        </div>
        <div className="hero-art" role="img" aria-label="Original abstract artwork depicting the sun and agricultural field contours"><div className="sun"/><div className="hill h1"/><div className="hill h2"/><div className="field-ribs" aria-hidden="true"/><div className="grain grain1" aria-hidden="true">✳</div><div className="art-label">FROM FARMGATE<br/>TO THE MARKET</div><span className="visual-index">FIG. 01 / A TRADE IN PROGRESS</span></div>
      </div>
      <div className="hero-bottom"><span>SCROLL TO EXPLORE ↓</span><span>SPECIFICATION / INSPECTION / TRANSACTION</span></div>
    </section>

    <section className="statement section-pad" aria-labelledby="principle-title"><span className="eyebrow">01 / A SIMPLE PRINCIPLE</span><h2 id="principle-title">Rice is a commodity.<br/><em>Confidence is not.</em></h2><p>From crop identity to delivery terms, the commercial value of rice depends on more than a quoted rate. We are building our process around the questions buyers and suppliers need answered before a transaction.</p></section>

    <section className="pillars section-pad" aria-labelledby="disciplines-title"><div className="section-heading"><span className="eyebrow">02 / THREE DISCIPLINES</span><h2 id="disciplines-title">Good supply chains<br/><em>are built deliberately.</em></h2></div><div className="pillar-grid">{pillars.map(item=><article key={item.number}><span>{item.number} / PROCESS</span><h3>{item.title}</h3><p>{item.body}</p><Link href={item.link}>{item.cta} <span aria-hidden="true">↗</span></Link></article>)}</div></section>

    <section className="feature" aria-labelledby="quality-title"><div className="feature-visual"><span>QUALITY IS A MEASUREMENT,<br/>NOT A PROMISE.</span><div className="field-lines" aria-hidden="true"/><span className="feature-caption">LOT ID · VARIETY · MOISTURE · GRADE</span></div><div className="feature-copy"><span className="eyebrow">03 / THE COMMERCIAL STANDARD</span><h2 id="quality-title">A specification<br/>both sides<br/><em>can stand behind.</em></h2><p>Every order should begin with a clear definition of the product and the rules for sampling and acceptance. Explore the attributes we propose recording before purchasing or dispatch.</p><Link className="text-link" href="/quality">View quality framework <span>↗</span></Link></div></section>

    <section className="insights-home section-pad" aria-labelledby="insights-title"><div className="insights-heading"><div><span className="eyebrow">04 / WORKING NOTES</span><h2 id="insights-title">Understand the trade.<br/><em>Improve the decision.</em></h2></div><Link className="subtle-link" href="/insights">All insights ↗</Link></div><div className="insight-grid">{publications.map((item,i)=><article key={item.title}><span className="eyebrow">{item.kicker}</span><div className="insight-number">0{i+1}</div><h3>{item.title}</h3><p>{item.summary}</p><span className="draft-label">Article in development</span></article>)}</div></section>

    <section className="contact-band"><span className="eyebrow">05 / START WITH THE REQUIREMENT</span><h2>What rice are you<br/><em>looking for?</em></h2><p>Variety, grade, quantity, packing and destination: tell us the parameters that matter.</p><Link href="/contact">Prepare a trade enquiry ↗</Link></section>
  </main>;
}
