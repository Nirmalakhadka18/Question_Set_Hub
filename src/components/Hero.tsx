export default function Hero() {
  return (
    <section className="bg-[var(--surface-2)] pt-6 pb-5 border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8 lg:px-12 xl:px-14 flex flex-col items-start text-left">
        
        <div className="inline-flex items-center gap-2 rounded border border-[var(--border)] bg-white px-2 py-0.5 text-[10px] font-bold mb-3 uppercase tracking-wider text-[var(--accent)]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h16"/><path d="M4 14h16"/></svg>
          INTERVIEW PREPARATION HUB
        </div>
        
        <h1 className="max-w-3xl text-xl font-bold text-[var(--fg)] sm:text-2xl mb-2">
          Your Central Hub for Technical Interview Preparation
        </h1>
        
        <p className="max-w-2xl text-sm text-[var(--fg-muted)]">
          Explore technical interview question sets covering networking, security, cloud, DevOps, Linux, Azure, IAM and more.
        </p>
      </div>
    </section>
  );
}

