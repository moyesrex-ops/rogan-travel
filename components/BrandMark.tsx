export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-ink-900 grid place-items-center shadow-glow">
        <span className="text-white font-black tracking-tight">RT</span>
      </div>
      <div className="leading-tight">
        <div className="font-extrabold text-ink-900">Rogan Travel &amp; Tour</div>
        <div className="text-xs text-ink-600">Your Gateway to the World</div>
      </div>
    </div>
  );
}
