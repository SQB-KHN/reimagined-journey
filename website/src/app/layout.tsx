import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Field & Grain | Responsible Rice Trade", template: "%s | Field & Grain" },
  description: "A demonstration website for a rice sourcing and distribution business focused on clear specifications, documented procurement and dependable trade.",
};
const links = [["Our approach","/approach"],["Rice catalogue","/products"],["Quality","/quality"],["Trade insights","/insights"],["Compliance","/compliance"],["Contact","/contact"]];
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><header className="site-header"><Link className="wordmark" href="/" aria-label="Field and Grain home">FIELD <span>&</span> GRAIN<span className="wordmark-dot">.</span></Link><nav aria-label="Main navigation">{links.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}</nav><Link className="header-cta" href="/contact">Discuss supply <span aria-hidden="true">↗</span></Link></header>{children}<footer className="footer"><div><div className="footer-wordmark">FIELD & GRAIN.</div><p>Clarity from farmgate to buyer.</p></div><div><span>Explore</span><Link href="/products">Rice catalogue</Link><Link href="/quality">Quality standards</Link><Link href="/compliance">Trade compliance</Link><Link href="/insights">Insights</Link></div><div><span>Connect</span><Link href="/contact">Trade enquiries</Link><p>India · Domestic & international trade</p></div><div className="copyright">© {new Date().getFullYear()} Field & Grain. Working concept; trade claims subject to verification.</div></footer></body></html>;
}