export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-28 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-700/25 blur-3xl motion-safe:animate-pulse" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#3c096c]/30 blur-3xl motion-safe:animate-pulse [animation-delay:1.2s]" />
      <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-[#240046]/40 blur-3xl motion-safe:animate-pulse [animation-delay:2.2s]" />
    </div>
  );
}
