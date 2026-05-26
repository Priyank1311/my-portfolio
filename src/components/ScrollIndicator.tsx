export function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-3" aria-hidden>
      <span className="text-[10px] uppercase tracking-[0.4em] text-muted">Scroll</span>
      <div className="relative h-12 w-px overflow-hidden bg-white/10">
        <span className="absolute left-0 top-0 h-4 w-full animate-scroll-down bg-[length:100%_200%] bg-gradient-to-b from-transparent via-[#89AACC] to-transparent" />
      </div>
    </div>
  )
}
