/* =============================================================
   DESIGN: Dark Luxury — BTC orange (#F7931A), Playfair + Inter
   ============================================================= */
import Navbar from "@/components/Navbar";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen" style={{ background: "#0A0A0A" }}>
      <Navbar />
      <div className="container py-32 max-w-3xl mx-auto">
        <Link href="/">
          <a
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-10 transition-colors"
            style={{ color: "oklch(0.72 0.17 55)" }}
          >
            <ArrowLeft size={13} /> Back to Home
          </a>
        </Link>

        <p className="section-label mb-4">Legal</p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#F5F0E8",
            marginBottom: "0.5rem",
          }}
        >
          Terms of Service
        </h1>
        <p className="text-sm mb-10" style={{ color: "oklch(0.55 0.008 65)" }}>
          Last updated: April 2026 · Halfacre Research
        </p>

        <div className="gold-line mb-10" />

        <div className="prose-legal">
          <Section title="1. Acceptance of Terms">
            By accessing or using this website (codexyield.com) and any services offered by Halfacre Research
            ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not
            agree to these terms, please do not use this website or any of our services.
          </Section>

          <Section title="2. Not Investment Advice">
            Nothing on this website constitutes investment advice, financial advice, trading advice, or any
            other sort of advice. All content is provided for informational purposes only. Halfacre Research
            is not a registered investment advisor, broker-dealer, or financial planner. You should not make
            any investment decision based solely on information found on this website.
          </Section>

          <Section title="3. Commodity Classification">
            Bitcoin and all digital assets referenced or traded within the Bitcoin Treasury Codex strategy
            are classified as commodities. Halfacre Research does not trade securities. All trading activity
            is conducted in commodity markets only.
          </Section>

          <Section title="4. Qualified Investors Only">
            Services offered by Halfacre Research are available to qualified investors only. The minimum
            investment is $100,000 USD. By engaging with our services, you represent and warrant that you
            meet the applicable suitability requirements in your jurisdiction.
          </Section>

          <Section title="5. No Offer of Securities">
            Nothing on this website constitutes an offer to sell, or a solicitation of an offer to buy, any
            security. No securities are offered or sold through this website. Any such offer or solicitation
            would only be made pursuant to a separate written agreement.
          </Section>

          <Section title="6. Past Performance Disclosure">
            All backtested and historical performance figures presented on this website are for informational
            purposes only. Past performance is not indicative of future results. Backtested results have
            inherent limitations and do not reflect actual trading. All investments involve risk, including
            the possible loss of principal.
          </Section>

          <Section title="7. Client Account Structure">
            Clients maintain direct ownership and control of their SFOX brokerage accounts. Halfacre Research
            holds limited trading permissions only and has no withdrawal rights over client funds. Client
            assets are never commingled with firm assets. Custody is provided by SAFE Trust, a qualified
            custodian.
          </Section>

          <Section title="8. Intellectual Property">
            All content on this website, including but not limited to text, graphics, logos, images, and
            software, is the property of Halfacre Research and is protected by applicable intellectual
            property laws. You may not reproduce, distribute, or create derivative works without our express
            written permission.
          </Section>

          <Section title="9. Limitation of Liability">
            To the maximum extent permitted by applicable law, Halfacre Research shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your use of this
            website or our services, even if we have been advised of the possibility of such damages.
          </Section>

          <Section title="10. Governing Law">
            These Terms of Service shall be governed by and construed in accordance with the laws of the
            State of Alabama, without regard to its conflict of law provisions. Any disputes arising under
            these terms shall be subject to the exclusive jurisdiction of the courts located in Alabama.
          </Section>

          <Section title="11. Changes to Terms">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective
            immediately upon posting to this website. Your continued use of this website following any
            changes constitutes your acceptance of the revised terms.
          </Section>

          <Section title="12. Contact">
            If you have questions about these Terms of Service, please contact us at:
            <br /><br />
            <strong style={{ color: "#F5F0E8" }}>Halfacre Research</strong><br />
            <a href="mailto:matt@halfacreresearch.tech" style={{ color: "oklch(0.72 0.17 55)" }}>
              matt@halfacreresearch.tech
            </a><br />
            (251) 228-0500
          </Section>
        </div>
      </div>

      <footer
        className="mt-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "oklch(0.07 0.003 285)" }}
      >
        <div className="container py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: "oklch(0.40 0.005 65)" }}>
            © 2026 Halfacre Research. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/terms">
              <a className="text-xs" style={{ color: "oklch(0.72 0.17 55)" }}>Terms of Service</a>
            </Link>
            <Link href="/privacy">
              <a className="text-xs transition-colors" style={{ color: "oklch(0.40 0.005 65)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.17 55)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.40 0.005 65)")}
              >Privacy Policy</a>
            </Link>
            <Link href="/legal">
              <a className="text-xs transition-colors" style={{ color: "oklch(0.40 0.005 65)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.17 55)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.40 0.005 65)")}
              >Legal Disclosures</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.15rem",
          fontWeight: 600,
          color: "#F5F0E8",
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </h2>
      <p style={{ color: "oklch(0.62 0.008 65)", lineHeight: 1.8, fontSize: "0.9rem" }}>
        {children}
      </p>
      <div className="mt-6" style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />
    </div>
  );
}
