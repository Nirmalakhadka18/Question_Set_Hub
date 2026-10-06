export default function Hero() {
  return (
    <section className="bg-[var(--bg)] pt-8 pb-6 border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 xl:px-16 flex flex-col items-start text-left">
        
        <div className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-mono font-semibold mb-4 uppercase tracking-wider text-[var(--fg-muted)]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]"><path d="M4 10h16"/><path d="M4 14h16"/></svg>
          INTERVIEW PREPARATION HUB
        </div>
        
        <h1 className="max-w-3xl text-2xl font-bold tracking-tight text-[var(--fg)] sm:text-3xl mb-3">
          Your Central Hub for Technical Interview Preparation
        </h1>
        
        <p className="max-w-2xl text-base text-[var(--fg-muted)] font-medium mb-6">
          Explore technical interview question sets covering networking, security, cloud, DevOps, Linux, Azure, IAM and more.
        </p>
      </div>
    </section>
  );
}

