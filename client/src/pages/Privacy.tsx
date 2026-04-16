/* =============================================================
   DESIGN: Dark Luxury — BTC orange (#F7931A), Playfair + Inter
   ============================================================= */
import Navbar from "@/components/Navbar";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
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
          Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: "oklch(0.55 0.008 65)" }}>
          Last updated: April 2026 · Halfacre Research
        </p>

        <div className="gold-line mb-10" />

        <div>
          <Section title="1. Information We Collect">
            We collect information you provide directly to us, including your name, email address, phone
            number, and any other information you submit through our contact forms, consultation booking
            requests, or newsletter subscriptions. We do not collect financial account information through
            this website.
          </Section>

          <Section title="2. How We Use Your Information">
            We use the information we collect to respond to your inquiries, send you the newsletter you
            subscribed to, schedule and conduct consultations, and communicate updates about our services.
            We do not sell, rent, or share your personal information with third parties for their marketing
            purposes.
          </Section>

          <Section title="3. Newsletter">
            If you subscribe to "The New School" newsletter, we will use your email address to send you
            periodic market analysis and strategy updates. You may unsubscribe at any time by clicking the
            unsubscribe link in any email we send, or by contacting us directly.
          </Section>

          <Section title="4. Cookies and Analytics">
            This website uses minimal analytics to understand aggregate traffic patterns (pages visited,
            general geographic region, device type). We do not use tracking cookies for advertising
            purposes. You may disable cookies in your browser settings without affecting your ability to
            use this website.
          </Section>

          <Section title="5. Client Data">
            Data related to active client accounts, trading activity, and portfolio performance is handled
            separately through our secure client portal (client.codexyield.com) and is governed by the
            client agreement signed at onboarding. Client financial data is never stored on or transmitted
            through this marketing website.
          </Section>

          <Section title="6. Data Security">
            We implement reasonable technical and organizational measures to protect the personal information
            we collect. However, no method of transmission over the internet is 100% secure. We cannot
            guarantee absolute security of your information.
          </Section>

          <Section title="7. Third-Party Services">
            This website may contain links to third-party websites including LinkedIn, SFOX, and SAFE Trust.
            We are not responsible for the privacy practices of those sites. We encourage you to review
            their privacy policies before providing any personal information.
          </Section>

          <Section title="8. Children's Privacy">
            This website is not directed to individuals under the age of 18. We do not knowingly collect
            personal information from minors. If you believe we have inadvertently collected such
            information, please contact us immediately.
          </Section>

          <Section title="9. Your Rights">
            You may request access to, correction of, or deletion of your personal information at any time
            by contacting us at the address below. We will respond to such requests within a reasonable
            timeframe.
          </Section>

          <Section title="10. Changes to This Policy">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with
            an updated effective date. Your continued use of this website after any changes constitutes
            acceptance of the revised policy.
          </Section>

          <Section title="11. Contact">
            For questions about this Privacy Policy or our data practices, contact us at:
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
              <a className="text-xs transition-colors" style={{ color: "oklch(0.40 0.005 65)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.17 55)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.40 0.005 65)")}
              >Terms of Service</a>
            </Link>
            <Link href="/privacy">
              <a className="text-xs" style={{ color: "oklch(0.72 0.17 55)" }}>Privacy Policy</a>
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
