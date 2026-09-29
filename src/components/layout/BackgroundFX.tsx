export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="bg-grid absolute inset-0 [-webkit-mask-image:linear-gradient(to_bottom,black,black_60%,rgba(0,0,0,0.35))] [mask-image:linear-gradient(to_bottom,black,black_60%,rgba(0,0,0,0.35))]" />
      <div className="bg-glow animate-drift-a absolute -left-24 -top-24 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,var(--color-signal)_0%,transparent_70%)] opacity-[0.16] dark:opacity-[0.22]" />
      <div className="bg-glow animate-drift-b absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,var(--color-signal)_0%,transparent_70%)] opacity-[0.12] dark:opacity-[0.18]" />
      <div className="bg-glow animate-drift-c absolute -bottom-40 left-1/4 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,var(--color-signal)_0%,transparent_70%)] opacity-[0.1] dark:opacity-[0.16]" />
    </div>
  );
}
