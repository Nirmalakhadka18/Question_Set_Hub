const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] pt-16 md:pt-24 pb-12 md:pb-16 border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 xl:px-16">
        
        <div className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-mono font-semibold mb-6 uppercase tracking-wider text-[var(--fg-muted)]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]"><path d="M4 10h16"/><path d="M4 14h16"/></svg>
          INTERVIEW PREPARATION HUB
        </div>
        
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[var(--fg)] sm:text-5xl md:text-6xl mb-6">
          Your Central Hub for Technical Interview Preparation
        </h1>
        
        <p className="max-w-2xl text-lg text-[var(--fg-muted)] font-medium mb-8">
          Explore technical interview question sets covering networking, security, cloud, DevOps, Linux, Azure, IAM and more.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#question-sets"
            className="group relative inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-bold text-[#0b1120] transition-colors hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-[var(--bg)]"
          >
            Explore Question Sets
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#question-sets"
            className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-bold text-[var(--fg)] transition-all hover:bg-[var(--surface-2)] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-[var(--bg)]"
          >
            View Categories
          </a>
        </div>
      </div>
    </section>
  );
}

