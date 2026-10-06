const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

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
        
        <div className="flex flex-col sm:flex-row items-start gap-3">
          <a
            href="#question-sets"
            className="group relative inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[#0b1120] transition-colors hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-[var(--bg)]"
          >
            Explore Question Sets
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#question-sets"
            className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--fg)] transition-all hover:bg-[var(--surface-2)] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-[var(--bg)]"
          >
            View Categories
          </a>
        </div>
      </div>
    </section>
  );
}

