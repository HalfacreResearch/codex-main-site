/* =============================================================
   DESIGN: Dark Luxury — #0A0A0A bg, #F7931A BTC orange, Playfair + Inter
   Sections: Hero → Stats Marquee → Opportunity → Strategy →
             Intelligence → Performance → Founder → Security →
             Newsletter → Contact → Footer
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import { useLiveStats } from "@/hooks/useLiveStats";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Cpu,
  BarChart3,
  Lock,
  Users,
  ChevronDown,
  ExternalLink,
  Database,
  Brain,
  Activity,
} from "lucide-react";

// ─── Image CDN URLs ───────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663096452459/cCFYG5nUXDPykN4ko9KJnH/codex-hero-bg-eDys29FCnuSoc3MeAVdx47.webp";
const STRATEGY_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663096452459/cCFYG5nUXDPykN4ko9KJnH/codex-strategy-bg-EApfaQxUnLV4mqEy3KBvqL.webp";
const SECURITY_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663096452459/cCFYG5nUXDPykN4ko9KJnH/codex-security-bg-JfextvZ9ocCiU5a6eEATHx.webp";
const FOUNDER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663096452459/cCFYG5nUXDPykN4ko9KJnH/codex-founder-4BnA6camC7FF4rMgcuScSU.webp";

// ─── BTC orange token ─────────────────────────────────────────
const ORANGE = "oklch(0.72 0.17 55)";
const ORANGE_BG = "rgba(247,147,26,0.08)";
const ORANGE_BORDER = "rgba(247,147,26,0.2)";

// ─── Helpers ─────────────────────────────────────────────────
function formatPrice(n: number | null) {
  if (n === null) return "—";
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}
function formatChange(n: number | null) {
  if (n === null) return null;
  const sign = n >= 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}

// ─── Animated counter ────────────────────────────────────────
function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const raf = (ts: number) => {
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [target, duration, trigger]);
  return value;
}

// ─── Intersection observer hook ──────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Marquee items ───────────────────────────────────────────
const MARQUEE_ITEMS = [
  "24 YEARS INVESTMENT EXPERIENCE",
  "$100K MINIMUM INVESTMENT",
  "NO LEVERAGE OR DERIVATIVES",
  "100% BITCOIN FOCUSED",
  "27,248% BTC 10-YEAR RETURN",
  "75,303 HISTORICAL CANDLES ANALYZED",
  "30+ LIQUIDITY VENUES VIA SFOX",
  "SAFE QUALIFIED CUSTODIAN TRUST",
  "69-YEAR FAMILY LEGACY IN FINANCIAL MARKETS",
  "111 QUANTITATIVE FACTORS",
];

// ─── Performance data (backtested) ───────────────────────────
const PERF_DATA = [
  { coin: "SOL/BTC", factor: "RSI 14", btcReturn: "3.57", stopType: "Trail L", periods: "2020–2026" },
  { coin: "SOL/BTC", factor: "Change 7D", btcReturn: "3.55", stopType: "Trail L", periods: "2020–2026" },
  { coin: "ETH/BTC", factor: "RSI 14", btcReturn: "2.84", stopType: "Trail M", periods: "2017–2026" },
  { coin: "XRP/BTC", factor: "Momentum 30D", btcReturn: "2.61", stopType: "Trail L", periods: "2017–2026" },
  { coin: "LINK/BTC", factor: "RSI 14", btcReturn: "2.43", stopType: "Trail M", periods: "2019–2026" },
];

// ─── Main component ──────────────────────────────────────────
export default function Home() {
  const stats = useLiveStats();
  const { ref: perfRef, inView: perfInView } = useInView();
  const { ref: statsRef, inView: statsInView } = useInView();

  // Verified figures: BTC 2015-2025 cumulative = 27,248% (StatMuse); S&P 2015-2025 = ~304%
  const btcReturn = useCountUp(27248, 2000, statsInView);
  const candles = useCountUp(75303, 2000, statsInView);
  const factors = useCountUp(111, 1200, statsInView);
  const years = useCountUp(24, 1000, statsInView);

  return (
    <div className="min-h-screen" style={{ background: "#0A0A0A" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "5rem" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})`, opacity: 0.45 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(10,10,10,0.92) 45%, rgba(10,10,10,0.35) 100%)",
          }}
        />

        {/* Live BTC ticker */}
        <div
          className="absolute top-20 right-6 lg:right-12 flex flex-col items-end gap-1 z-10"
          style={{ opacity: stats.loading ? 0.4 : 1 }}
        >
          <span className="section-label">BTC / USD</span>
          <span
            className="font-bold tabular-nums"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: ORANGE,
            }}
          >
            {formatPrice(stats.btcPrice)}
          </span>
          {stats.btcChange24h !== null && (
            <span
              className="text-xs font-semibold tabular-nums"
              style={{ color: stats.btcChange24h >= 0 ? "#4ade80" : "#f87171" }}
            >
              {formatChange(stats.btcChange24h)} 24h
            </span>
          )}
          {stats.fearGreedValue !== null && (
            <span className="text-xs" style={{ color: "oklch(0.55 0.008 65)" }}>
              Fear &amp; Greed: {stats.fearGreedValue} · {stats.fearGreedLabel}
            </span>
          )}
        </div>

        {/* Hero content */}
        <div className="container relative z-10 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="section-label mb-5 animate-fade-up">
              Halfacre Research · Institutional Bitcoin Management
            </p>
            <h1
              className="animate-fade-up-delay-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.08,
                color: "#F5F0E8",
                marginBottom: "1.5rem",
              }}
            >
              Bitcoin Treasury
              <br />
              <em style={{ color: ORANGE, fontStyle: "italic" }}>Codex</em>
            </h1>
            <p
              className="animate-fade-up-delay-2"
              style={{
                color: "oklch(0.70 0.008 65)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                maxWidth: "520px",
                marginBottom: "2.5rem",
              }}
            >
              Institutional-grade Bitcoin accumulation powered by AI, machine learning,
              and blockchain analytics. Built for HNWIs, family offices, and institutional
              treasuries that understand Bitcoin is the asset of the century.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <button
                className="btn-gold"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Consultation <ArrowRight size={14} />
              </button>
              <button
                className="btn-ghost-gold"
                onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                How It Works
              </button>
            </div>

            {!stats.loading && (
              <div
                className="mt-10 inline-flex items-center gap-3 px-4 py-2.5"
                style={{ background: ORANGE_BG, border: `1px solid ${ORANGE_BORDER}` }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }}
                />
                <span className="text-xs font-medium tracking-wide" style={{ color: ORANGE }}>
                  LIVE · {stats.factorsSignaling}/{stats.totalFactors} factors active today
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="section-label" style={{ fontSize: "0.55rem" }}>SCROLL</span>
          <ChevronDown size={16} style={{ color: ORANGE }} className="animate-bounce" />
        </div>
      </section>

      {/* ── MARQUEE STATS BAR ─────────────────────────────────── */}
      <div
        className="overflow-hidden py-4"
        style={{ background: ORANGE }}
      >
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex shrink-0">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 px-8 text-xs font-bold tracking-widest uppercase"
                style={{ color: "#0A0A0A" }}
              >
                {item}
                <span style={{ color: "rgba(10,10,10,0.35)" }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── THE OPPORTUNITY ──────────────────────────────────── */}
      <section id="about" className="py-28 lg:py-36">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-5">The Opportunity</p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#F5F0E8",
                  marginBottom: "1.5rem",
                }}
              >
                Bitcoin Has Outperformed
                <br />
                <em style={{ color: ORANGE }}>Every Asset Class.</em>
                <br />
                Most Portfolios Have Zero Exposure.
              </h2>
              <p style={{ color: "oklch(0.65 0.008 65)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Over the past decade, Bitcoin has delivered returns that no other asset class
                has come close to matching. Yet the overwhelming majority of institutional
                capital remains on the sidelines — held back by operational complexity,
                custody concerns, and the absence of a systematic, disciplined accumulation strategy.
              </p>
              <p style={{ color: "oklch(0.65 0.008 65)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Bitcoin Treasury Codex was built to solve exactly that problem.
              </p>
              <button
                className="btn-ghost-gold"
                onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How We Do It <ArrowRight size={14} />
              </button>
            </div>

            {/* Right — stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              {[
                { label: "BTC 10-Year Return", value: btcReturn.toLocaleString() + "%", sub: "vs ~304% S&P 500 (2015–2025)" },
                { label: "Historical Candles", value: candles.toLocaleString(), sub: "Analyzed daily" },
                { label: "Quantitative Factors", value: factors.toString(), sub: "Backtested 2015–2026" },
                { label: "Years Experience", value: years.toString(), sub: "Investment expertise" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="card-dark p-6"
                  style={{ borderLeft: `2px solid ${ORANGE}` }}
                >
                  <div className="stat-number mb-1">{s.value}</div>
                  <div className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#F5F0E8" }}>
                    {s.label}
                  </div>
                  <div className="text-xs" style={{ color: "oklch(0.55 0.008 65)" }}>{s.sub}</div>
                </div>
              ))}
              <p className="col-span-2 text-xs" style={{ color: "oklch(0.45 0.006 65)" }}>
                Sources: StatMuse, Slickcharts (2015–2025 cumulative returns). Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* ── THE STRATEGY ─────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="relative py-28 lg:py-36 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${STRATEGY_BG})`, opacity: 0.12 }}
        />
        <div className="container relative z-10">
          <div className="max-w-xl mb-16">
            <p className="section-label mb-5">The Strategy</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#F5F0E8",
                marginBottom: "1rem",
              }}
            >
              Two Engines.
              <br />
              <em style={{ color: ORANGE }}>One Goal: More Bitcoin.</em>
            </h2>
            <p style={{ color: "oklch(0.65 0.008 65)", lineHeight: 1.8 }}>
              Every decision Codex makes is designed to increase your Bitcoin holdings
              in Bitcoin-denominated terms. Not in dollars. In Bitcoin.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-dark p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full" style={{ background: ORANGE }} />
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 flex items-center justify-center shrink-0"
                  style={{ background: ORANGE_BG, border: `1px solid ${ORANGE_BORDER}` }}
                >
                  <TrendingUp size={20} style={{ color: ORANGE }} />
                </div>
                <div>
                  <p className="section-label mb-3">01 — DCA Engine</p>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.35rem",
                      fontWeight: 600,
                      color: "#F5F0E8",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Algorithmic BTC Accumulation
                  </h3>
                  <p style={{ color: "oklch(0.60 0.008 65)", lineHeight: 1.75, fontSize: "0.9rem" }}>
                    Our AI-driven DCA engine analyzes 11 technical indicators across 7 timeframes
                    and 75,000+ historical candles to identify optimal Bitcoin entry points.
                    Capital is deployed systematically, not emotionally.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-dark p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full" style={{ background: ORANGE }} />
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 flex items-center justify-center shrink-0"
                  style={{ background: ORANGE_BG, border: `1px solid ${ORANGE_BORDER}` }}
                >
                  <BarChart3 size={20} style={{ color: ORANGE }} />
                </div>
                <div>
                  <p className="section-label mb-3">02 — Rotation Engine</p>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.35rem",
                      fontWeight: 600,
                      color: "#F5F0E8",
                      marginBottom: "0.75rem",
                    }}
                  >
                    BTC-Denominated Rotation
                  </h3>
                  <p style={{ color: "oklch(0.60 0.008 65)", lineHeight: 1.75, fontSize: "0.9rem" }}>
                    When market conditions present asymmetric opportunities in select commodity
                    assets, Codex rotates a portion of holdings to generate additional Bitcoin
                    yield. Every trade is measured in BTC gained, not USD profit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE INTELLIGENCE ─────────────────────────────────── */}
      <section id="platform" className="py-28 lg:py-36" style={{ background: "oklch(0.10 0.003 285)" }}>
        <div className="container">
          <div className="max-w-xl mb-16">
            <p className="section-label mb-5">The Intelligence</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#F5F0E8",
                marginBottom: "1rem",
              }}
            >
              Not a Hunch.
              <br />
              <em style={{ color: ORANGE }}>A System.</em>
            </h2>
            <p style={{ color: "oklch(0.65 0.008 65)", lineHeight: 1.8 }}>
              Every signal Codex generates flows from the same quantitative engine — 111 factors,
              7 XGBoost machine learning models, and 4,100+ rows of walk-forward validated
              training data. Here is what powers the decisions behind your portfolio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Brain size={20} />,
                title: "7 XGBoost ML Models",
                desc: "Trained on 4,100+ rows of historical data (2015–2026). Models cover BTC technical signals, on-chain cycle position, macro regime, altcoin rotation, and DCA timing. Walk-forward backtested — not curve-fit.",
              },
              {
                icon: <BarChart3 size={20} />,
                title: "111 Quantitative Factors",
                desc: "Every factor is backtested against real historical data with realistic transaction costs applied throughout. Top factors have delivered 3.5%+ BTC/year in walk-forward backtests.",
              },
              {
                icon: <Database size={20} />,
                title: "75,303 Historical Candles",
                desc: "Daily OHLCV data across BTC, ETH, SOL, XRP, and LINK going back to 2015. On-chain data including MVRV, NVT, exchange flows, and miner metrics layered on top.",
              },
              {
                icon: <Activity size={20} />,
                title: "Live Signal Consensus",
                desc: "Every day, all 111 factors are evaluated against current market conditions. The system requires 3+ high-quality factors to agree before generating a rotation signal — reducing false positives.",
              },
              {
                icon: <Cpu size={20} />,
                title: "Daily Retraining",
                desc: "ML models retrain automatically every night at 2:00 AM UTC on the latest data. Backtest engine reruns at 3:00 AM. Forward performance tracking validates every signal against real outcomes.",
              },
              {
                icon: <Users size={20} />,
                title: "Client Transparency",
                desc: "Every active client has real-time access to their portfolio performance, position history, and the signals driving each trade decision through the private client portal.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="card-dark p-6 flex flex-col gap-4"
                style={{ borderTop: `2px solid ${ORANGE}` }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ background: ORANGE_BG, border: `1px solid ${ORANGE_BORDER}` }}
                >
                  <span style={{ color: ORANGE }}>{p.icon}</span>
                </div>
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ color: "#F5F0E8", fontFamily: "'Playfair Display', serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm" style={{ color: "oklch(0.58 0.008 65)", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE ──────────────────────────────────────── */}
      <section id="performance" className="py-28 lg:py-36">
        <div className="container">
          <div className="max-w-xl mb-16">
            <p className="section-label mb-5">Performance</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#F5F0E8",
                marginBottom: "1rem",
              }}
            >
              Backtested Results.
              <br />
              <em style={{ color: ORANGE }}>Walk-Forward Validated.</em>
            </h2>
            <p style={{ color: "oklch(0.65 0.008 65)", lineHeight: 1.8 }}>
              111 quantitative factors backtested against real historical data (2015–2026),
              with realistic transaction costs applied throughout. Results are expressed
              in BTC-denominated annual return — the only metric that matters. Top factors:
            </p>
          </div>

          <div ref={perfRef} className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${ORANGE_BORDER}` }}>
                  {["Pair", "Factor", "BTC Return / Year", "Stop Type", "Period"].map((h) => (
                    <th
                      key={h}
                      className="text-left py-3 px-4 text-xs font-semibold tracking-widest uppercase"
                      style={{ color: ORANGE }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PERF_DATA.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      opacity: perfInView ? 1 : 0,
                      transform: perfInView ? "none" : "translateY(12px)",
                      transition: `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`,
                    }}
                  >
                    <td className="py-4 px-4 font-medium" style={{ color: "#F5F0E8" }}>{row.coin}</td>
                    <td className="py-4 px-4" style={{ color: "oklch(0.70 0.008 65)" }}>{row.factor}</td>
                    <td className="py-4 px-4 font-bold tabular-nums" style={{ color: ORANGE }}>
                      +{row.btcReturn}% BTC/yr
                    </td>
                    <td className="py-4 px-4" style={{ color: "oklch(0.60 0.008 65)" }}>{row.stopType}</td>
                    <td className="py-4 px-4" style={{ color: "oklch(0.55 0.008 65)" }}>{row.periods}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs" style={{ color: "oklch(0.42 0.006 65)" }}>
            Backtested results. Walk-forward validation methodology. Realistic transaction costs applied.
            Past performance is not indicative of future results. For qualified investors only.
          </p>

          <div className="mt-10">
            <a
              href="https://pitch.codexyield.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-gold inline-flex"
            >
              View Full Performance Deck <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* ── FOUNDER ──────────────────────────────────────────── */}
      <section id="about-founder" className="py-28 lg:py-36" style={{ background: "oklch(0.10 0.003 285)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div
                className="absolute -inset-3 opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${ORANGE}, transparent)`,
                  filter: "blur(40px)",
                }}
              />
              <img
                src={FOUNDER_IMG}
                alt="Matthew Halfacre — Founder, Halfacre Research"
                className="relative w-full max-w-sm mx-auto lg:mx-0 object-cover"
                style={{ aspectRatio: "1/1", filter: "grayscale(20%)" }}
              />
            </div>

            <div>
              <p className="section-label mb-5">The Founder</p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  color: "#F5F0E8",
                  marginBottom: "0.5rem",
                }}
              >
                Matthew Halfacre
              </h2>
              <p className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: ORANGE }}>
                Founder &amp; CEO · Halfacre Research
              </p>
              <p style={{ color: "oklch(0.65 0.008 65)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                24 years of investment experience. A 69-year family legacy in financial markets.
                Author of the Bitcoin 2050 Whitepaper — a 42-section, 25-year projection on
                Bitcoin's path to becoming the global reserve asset.
              </p>
              <p style={{ color: "oklch(0.65 0.008 65)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Matthew built Bitcoin Treasury Codex because he believed institutional investors
                deserved a disciplined, transparent, and algorithmically-sound way to accumulate
                Bitcoin without leverage, without derivatives, and without guesswork.
              </p>

              <blockquote
                className="pl-5 mb-6"
                style={{ borderLeft: `2px solid ${ORANGE}` }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    color: "oklch(0.80 0.008 65)",
                    lineHeight: 1.7,
                    fontSize: "1.05rem",
                  }}
                >
                  "The future of investing lies at the nexus of AI, machine learning,
                  blockchain, and quantum computing."
                </p>
              </blockquote>

              <p className="section-label mb-3">As Featured In</p>
              <div className="flex flex-wrap gap-3">
                {["TechBullion", "Capital Insight Hub", "Wantrepreneur Show", "Bitcoin 2050 Whitepaper"].map((pub) => (
                  <span
                    key={pub}
                    className="text-xs font-medium px-3 py-1.5 tracking-wide"
                    style={{ background: ORANGE_BG, border: `1px solid ${ORANGE_BORDER}`, color: ORANGE }}
                  >
                    {pub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECURITY ─────────────────────────────────────────── */}
      <section id="security" className="relative py-28 lg:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SECURITY_BG})`, opacity: 0.15 }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.75)" }} />

        <div className="container relative z-10">
          <div className="max-w-xl mb-16">
            <p className="section-label mb-5">Security &amp; Custody</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#F5F0E8",
                marginBottom: "1rem",
              }}
            >
              Institutional Infrastructure.
              <br />
              <em style={{ color: ORANGE }}>Client-Controlled Assets.</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <BarChart3 size={22} />,
                title: "SFOX Prime Execution",
                desc: "Institutional-grade execution across 30+ liquidity venues. Best-in-class price discovery for every trade.",
              },
              {
                icon: <Shield size={22} />,
                title: "SAFE Trust Custody",
                desc: "Assets held by a qualified custodian trust. Your Bitcoin is never commingled with firm assets.",
              },
              {
                icon: <Lock size={22} />,
                title: "Client-Controlled Accounts",
                desc: "You own your SFOX account. Halfacre Research holds trading permissions only. Zero withdrawal rights.",
              },
            ].map((item) => (
              <div key={item.title} className="card-dark p-7 flex flex-col gap-4">
                <div
                  className="w-11 h-11 flex items-center justify-center"
                  style={{ background: ORANGE_BG, border: `1px solid ${ORANGE_BORDER}` }}
                >
                  <span style={{ color: ORANGE }}>{item.icon}</span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#F5F0E8",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "oklch(0.60 0.008 65)", lineHeight: 1.7, fontSize: "0.875rem" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* ── NEWSLETTER ───────────────────────────────────────── */}
      <section className="py-20 lg:py-24" style={{ background: "oklch(0.10 0.003 285)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label mb-4">Stay Informed</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                color: "#F5F0E8",
                marginBottom: "1rem",
              }}
            >
              Get Bitcoin Intelligence
              <br />
              <em style={{ color: ORANGE }}>Delivered to Your Inbox</em>
            </h2>
            <p style={{ color: "oklch(0.60 0.008 65)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Join 340+ subscribers receiving <strong style={{ color: "#F5F0E8" }}>"The New School"</strong> newsletter.
              Institutional-grade Bitcoin analysis, strategy updates, and market intelligence.
              No spam. Unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 text-sm"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#F5F0E8",
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.borderColor = ORANGE)}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
              />
              <button className="btn-gold shrink-0">Subscribe</button>
            </div>
            <p className="mt-4 text-xs" style={{ color: "oklch(0.45 0.006 65)" }}>
              Or read the newsletter directly on{" "}
              <a
                href="https://www.linkedin.com/in/halfacreresearch/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: ORANGE }}
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ────────────────────────────────────── */}
      <section id="contact" className="py-28 lg:py-36">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label mb-5">Ready to Begin</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#F5F0E8",
                marginBottom: "1.25rem",
              }}
            >
              Schedule Your
              <br />
              <em style={{ color: ORANGE }}>Consultation</em>
            </h2>
            <p style={{ color: "oklch(0.65 0.008 65)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              Minimum investment: $100,000 USD. Qualified investors only. Book a private
              consultation with Matthew Halfacre to discuss whether Bitcoin Treasury Codex
              is right for your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="mailto:matt@halfacreresearch.tech" className="btn-gold">
                Book a Consultation <ArrowRight size={14} />
              </a>
              <a
                href="https://client.codexyield.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-gold"
              >
                Client Portal <ExternalLink size={13} />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm" style={{ color: "oklch(0.55 0.008 65)" }}>
              <a
                href="mailto:matt@halfacreresearch.tech"
                className="transition-colors"
                style={{ color: "oklch(0.55 0.008 65)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0.008 65)")}
              >
                matt@halfacreresearch.tech
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href="tel:+12512280500"
                className="transition-colors"
                style={{ color: "oklch(0.55 0.008 65)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0.008 65)")}
              >
                (251) 228-0500
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer style={{ background: "oklch(0.07 0.003 285)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <p
                className="font-bold tracking-widest uppercase text-xs mb-3"
                style={{ color: ORANGE, letterSpacing: "0.18em" }}
              >
                Bitcoin Treasury Codex
              </p>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "oklch(0.50 0.006 65)" }}>
                Institutional-grade Bitcoin intelligence built for the modern treasury.
                Powered by AI, machine learning, and blockchain analytics.
                Operated by Halfacre Research.
              </p>
              <a
                href="https://www.linkedin.com/in/halfacreresearch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: ORANGE }}
              >
                LinkedIn Newsletter →
              </a>
            </div>

            {/* Navigate */}
            <div>
              <p className="section-label mb-4">Navigate</p>
              {[
                { label: "Home", anchor: "#" },
                { label: "About Matthew", anchor: "#about-founder" },
                { label: "How It Works", anchor: "#how-it-works" },
                { label: "The Intelligence", anchor: "#platform" },
                { label: "Performance", anchor: "#performance" },
                { label: "Contact", anchor: "#contact" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.anchor}
                  className="block text-xs mb-2.5 transition-colors"
                  style={{ color: "oklch(0.50 0.006 65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.50 0.006 65)")}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Resources */}
            <div>
              <p className="section-label mb-4">Resources</p>
              {[
                { label: "Bitcoin 2050 Whitepaper", href: "#" },
                { label: "The New School Newsletter", href: "https://www.linkedin.com/in/halfacreresearch/" },
                { label: "TechBullion Feature", href: "https://techbullion.com/forging-a-new-financial-paradigm-matthew-halfacres-bitcoin-native-vision/" },
                { label: "Client Portal", href: "https://client.codexyield.com" },
                { label: "Investor Pitch Deck", href: "https://pitch.codexyield.com" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block text-xs mb-2.5 transition-colors"
                  style={{ color: "oklch(0.50 0.006 65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.50 0.006 65)")}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <p className="section-label mb-4">Contact</p>
              <a
                href="mailto:matt@halfacreresearch.tech"
                className="block text-xs mb-2.5 transition-colors"
                style={{ color: "oklch(0.50 0.006 65)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.50 0.006 65)")}
              >
                matt@halfacreresearch.tech
              </a>
              <a
                href="tel:+12512280500"
                className="block text-xs mb-2.5 transition-colors"
                style={{ color: "oklch(0.50 0.006 65)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.50 0.006 65)")}
              >
                (251) 228-0500
              </a>
              <p className="text-xs mt-4" style={{ color: "oklch(0.40 0.005 65)" }}>
                Halfacre Research<br />
                Qualified Investors Only<br />
                $100K Minimum
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p className="text-xs" style={{ color: "oklch(0.35 0.004 65)" }}>
              © 2026 Halfacre Research. All rights reserved. · Not an offer of securities. For qualified investors only.
            </p>
            <div className="flex gap-5">
              <Link href="/terms">
                <a
                  className="text-xs transition-colors"
                  style={{ color: "oklch(0.40 0.005 65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.40 0.005 65)")}
                >
                  Terms of Service
                </a>
              </Link>
              <Link href="/privacy">
                <a
                  className="text-xs transition-colors"
                  style={{ color: "oklch(0.40 0.005 65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.40 0.005 65)")}
                >
                  Privacy Policy
                </a>
              </Link>
              <Link href="/legal">
                <a
                  className="text-xs transition-colors"
                  style={{ color: "oklch(0.40 0.005 65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.40 0.005 65)")}
                >
                  Legal Disclosures
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
