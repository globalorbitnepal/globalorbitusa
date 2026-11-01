const PINS = [
  { code: "np", name: "USA", left: 52.2, top: 33.6, delay: "0s" },
  { code: "in", name: "India", left: 50.26, top: 41.8, delay: "0.6s" },
  { code: "us", name: "USA", left: 88.6, top: 36.8, delay: "1.2s" },
] as const;

export function HeroGlobePins() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {PINS.map((pin) => (
        <div
          key={pin.code}
          className="orbit-pin absolute flex items-center gap-[0.55em] text-[clamp(11px,1.3vw,24px)]"
          style={{ left: `${pin.left}%`, top: `${pin.top}%`, animationDelay: pin.delay }}
        >
          <span className="relative inline-flex h-[2em] w-[2em] shrink-0 items-center justify-center">
            <span className="orbit-pin-ring absolute inset-0 rounded-full border border-[#f0c43a]" />
            <span
              className="orbit-pin-ring orbit-pin-ring-2 absolute inset-0 rounded-full border border-white/70"
              style={{ animationDelay: "1.4s" }}
            />
            <img
              src={`https://flagcdn.com/w80/${pin.code}.png`}
              alt=""
              className="h-full w-full rounded-full bg-white object-cover ring-2 ring-white/90 drop-shadow-[0_6px_14px_rgba(0,0,0,0.55)]"
            />
          </span>
          <span className="whitespace-nowrap font-[family-name:var(--font-jakarta)] font-bold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]">
            {pin.name}
          </span>
        </div>
      ))}
    </div>
  );
}
