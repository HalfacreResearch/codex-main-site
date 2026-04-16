/* =============================================================
   Fetches live stats from the tradinghq VPS API (port 3001)
   Falls back to static values if API is unreachable
   ============================================================= */
import { useState, useEffect } from "react";

const API_BASE = "https://tradinghq.codexyield.com";

export interface LiveStats {
  btcPrice: number | null;
  btcChange24h: number | null;
  factorsSignaling: number;
  totalFactors: number;
  fearGreedValue: number | null;
  fearGreedLabel: string;
  topFactor: string;
  topFactorReturn: string;
  loading: boolean;
}

const DEFAULTS: LiveStats = {
  btcPrice: null,
  btcChange24h: null,
  factorsSignaling: 42,
  totalFactors: 111,
  fearGreedValue: null,
  fearGreedLabel: "—",
  topFactor: "SOL/BTC RSI 14",
  topFactorReturn: "3.57% BTC/yr",
  loading: true,
};

export function useLiveStats(): LiveStats {
  const [stats, setStats] = useState<LiveStats>(DEFAULTS);

  useEffect(() => {
    let cancelled = false;

    async function fetchStats() {
      try {
        // Fetch BTC price + fear & greed from tradinghq API
        const [priceRes, signalRes] = await Promise.allSettled([
          fetch(`${API_BASE}/api/btc-price`, { signal: AbortSignal.timeout(5000) }),
          fetch(`${API_BASE}/api/signal-summary`, { signal: AbortSignal.timeout(5000) }),
        ]);

        let btcPrice: number | null = null;
        let btcChange24h: number | null = null;
        let fearGreedValue: number | null = null;
        let fearGreedLabel = "—";
        let factorsSignaling = 42;
        let totalFactors = 111;

        if (priceRes.status === "fulfilled" && priceRes.value.ok) {
          const data = await priceRes.value.json();
          btcPrice = data.price ?? data.btcPrice ?? null;
          btcChange24h = data.change24h ?? data.priceChange24h ?? null;
          fearGreedValue = data.fearGreedValue ?? null;
          fearGreedLabel = data.fearGreedLabel ?? "—";
        }

        if (signalRes.status === "fulfilled" && signalRes.value.ok) {
          const data = await signalRes.value.json();
          factorsSignaling = data.factorsSignaling ?? data.signaling ?? 42;
          totalFactors = data.totalFactors ?? 111;
        }

        if (!cancelled) {
          setStats({
            btcPrice,
            btcChange24h,
            fearGreedValue,
            fearGreedLabel,
            factorsSignaling,
            totalFactors,
            topFactor: "SOL/BTC RSI 14",
            topFactorReturn: "3.57% BTC/yr",
            loading: false,
          });
        }
      } catch {
        if (!cancelled) {
          setStats((prev) => ({ ...prev, loading: false }));
        }
      }
    }

    fetchStats();
    const interval = setInterval(fetchStats, 60_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return stats;
}
