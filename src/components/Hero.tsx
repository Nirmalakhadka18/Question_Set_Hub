export default function Hero() {
  return (
    <section className="pt-8 pb-6 border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8 lg:px-12 xl:px-14 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 rounded border border-[var(--border)] bg-white px-3 py-1.5 text-xs sm:text-[13px] font-bold mb-4 uppercase tracking-wider text-[var(--accent)] shadow-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h16"/><path d="M4 14h16"/></svg>
          INTERVIEW PREPARATION HUB
        </div>
        
        <h1 className="max-w-[1200px] text-3xl font-extrabold tracking-tight sm:text-[44px] lg:text-[58px] leading-[1.05] mb-4">
          <span className="text-[var(--fg)]">Your Central Hub for</span><br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent">Technical Interview Preparation</span>
        </h1>
        
        <p className="max-w-[850px] text-base sm:text-lg font-medium leading-relaxed text-[var(--fg-muted)]">
          Explore technical interview question sets covering networking, security, cloud, DevOps, Linux, Azure, IAM and more.
        </p>
      </div>
    </section>
  );
}
