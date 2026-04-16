/* =============================================================
   DESIGN: Dark Luxury — BTC orange (#F7931A), Playfair + Inter
   ============================================================= */
import Navbar from "@/components/Navbar";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Legal() {
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
          Legal Disclosures
        </h1>
        <p className="text-sm mb-10" style={{ color: "oklch(0.55 0.008 65)" }}>
          Last updated: April 2026 · Halfacre Research
        </p>

        <div className="gold-line mb-10" />

        {/* Important notice box */}
        <div
          className="p-6 mb-10"
          style={{
            background: "rgba(247,147,26,0.06)",
            border: "1px solid rgba(247,147,26,0.2)",
          }}
        >
          <p
            className="text-sm font-semibold mb-2"
            style={{ color: "oklch(0.72 0.17 55)", letterSpacing: "0.05em" }}
          >
            IMPORTANT NOTICE
          </p>
          <p style={{ color: "oklch(0.70 0.008 65)", lineHeight: 1.8, fontSize: "0.875rem" }}>
            Bitcoin Treasury Codex is operated by Halfacre Research. This service is for qualified
            investors only. Minimum investment: $100,000 USD. Nothing herein constitutes an offer to
            sell or a solicitation of an offer to buy any security. All digital assets traded are
            classified as commodities. Past performance is not indicative of future results.
          </p>
        </div>

        <div>
          <Section title="Regulatory Status">
            Halfacre Research is not a registered investment advisor (RIA), broker-dealer, commodity
            trading advisor (CTA), or commodity pool operator (CPO) with the Securities and Exchange
            Commission (SEC), the Financial Industry Regulatory Authority (FINRA), the Commodity Futures
            Trading Commission (CFTC), or any state securities regulator. The services provided by
            Halfacre Research do not constitute investment advisory services as defined under the
            Investment Advisers Act of 1940.
          </Section>

          <Section title="Commodity Classification">
            Bitcoin (BTC) and all other digital assets referenced or traded within the Bitcoin Treasury
            Codex strategy are treated as commodities under applicable law. No securities are offered,
            sold, or traded. All trading activity occurs exclusively in spot commodity markets. No
            derivatives, futures, options, or leveraged products are used.
          </Section>

          <Section title="Performance Disclosures">
            All performance figures presented on this website, including backtested results, are
            hypothetical and for illustrative purposes only. Backtested performance does not represent
            actual trading results and has inherent limitations. Actual results may differ materially
            from backtested results due to market conditions, execution costs, timing, and other factors.
            The backtesting methodology applies a 1.6% round-trip transaction cost (0.5% entry fee,
            0.5% exit fee, 0.3% slippage per side) and walk-forward validation across the period
            2015 to 2026. Past performance, whether actual or simulated, is not indicative of future
            results. All investments involve risk, including the possible loss of principal.
          </Section>

          <Section title="Client Account Structure and Custody">
            Each client maintains direct ownership and control of their own SFOX Prime brokerage account.
            Halfacre Research holds limited trading permissions only, granted by the client through a
            limited power of attorney. Halfacre Research has no withdrawal rights over client funds at
            any time. Digital asset custody is provided by SAFE Trust, a qualified custodian. Client
            assets are never commingled with firm assets.
          </Section>

          <Section title="Execution and Fee Disclosure">
            Trade execution is conducted through SFOX Prime, an institutional-grade execution platform
            providing access to 30+ liquidity venues. SFOX charges a commission of approximately 25
            basis points (0.25%) per trade. Halfacre Research earns 15 basis points (0.15%) of the
            total commission as a fee for strategy management. There are no additional management fees,
            performance fees, or hidden charges. All fee arrangements are disclosed in the client
            agreement prior to account opening.
          </Section>

          <Section title="Risk Factors">
            Investing in Bitcoin and digital assets involves substantial risk. The value of digital
            assets can fluctuate significantly and may result in the loss of your entire investment.
            Digital asset markets operate 24 hours a day, 7 days a week, and are subject to extreme
            volatility, regulatory uncertainty, cybersecurity risks, and liquidity constraints. The
            Bitcoin Treasury Codex strategy is not suitable for all investors. You should carefully
            consider your investment objectives, risk tolerance, and financial situation before investing.
            Consult with a qualified financial professional before making any investment decision.
          </Section>

          <Section title="Forward-Looking Statements">
            This website may contain forward-looking statements regarding the Bitcoin Treasury Codex
            strategy, market conditions, and expected performance. These statements are based on current
            expectations and assumptions and involve known and unknown risks and uncertainties. Actual
            results may differ materially from those expressed or implied by such statements. Halfacre
            Research undertakes no obligation to update any forward-looking statements.
          </Section>

          <Section title="Third-Party Information">
            Certain information on this website is sourced from third parties including CoinGecko,
            Slickcharts, StatMuse, and Coinbase Institutional. While we believe these sources to be
            reliable, we cannot guarantee their accuracy or completeness. Third-party data is provided
            for informational purposes only and should not be relied upon as the sole basis for any
            investment decision.
          </Section>

          <Section title="Contact">
            For regulatory inquiries or legal matters, contact:
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
              <a className="text-xs transition-colors" style={{ color: "oklch(0.40 0.005 65)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.17 55)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.40 0.005 65)")}
              >Privacy Policy</a>
            </Link>
            <Link href="/legal">
              <a className="text-xs" style={{ color: "oklch(0.72 0.17 55)" }}>Legal Disclosures</a>
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
