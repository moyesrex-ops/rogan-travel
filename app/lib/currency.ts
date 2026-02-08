import { formatCurrency } from "@/components/utils";

export function getUsdNgnRate() {
  const raw = process.env.USD_NGN_RATE ?? "1500";
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? n : 1500;
}

export function dualPrice(ngn: number) {
  const rate = getUsdNgnRate();
  const usd = Math.round(ngn / rate);
  return { ngn: formatCurrency(ngn, "NGN"), usd: formatCurrency(usd, "USD") };
}
