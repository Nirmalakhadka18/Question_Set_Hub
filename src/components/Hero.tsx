export default function Hero() {
  return (
    <section className="pt-6 pb-5 border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8 lg:px-12 xl:px-14 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 rounded border border-[var(--border)] bg-white px-2.5 py-1 text-[11px] font-semibold mb-4 uppercase tracking-wider text-[var(--accent)]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h16"/><path d="M4 14h16"/></svg>
          INTERVIEW PREPARATION HUB
        </div>
        
        <h1 className="max-w-[1100px] text-3xl font-extrabold tracking-tight text-[var(--fg)] sm:text-[40px] lg:text-[52px] leading-[1.05] mb-4">
          Your Central Hub for<br className="hidden sm:block" /> Technical Interview Preparation
        </h1>
        
        <p className="max-w-[800px] text-base font-medium leading-relaxed text-[var(--fg-muted)]">
          Explore technical interview question sets covering networking, security, cloud, DevOps, Linux, Azure, IAM and more.
        </p>
      </div>
    </section>
  );
}

