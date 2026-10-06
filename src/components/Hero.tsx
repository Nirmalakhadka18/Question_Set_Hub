const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] dark:bg-[var(--bg)] pt-16 md:pt-24 pb-12 md:pb-16 border-b border-[var(--border)] dark:border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 xl:px-16">
        
        <div className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-[var(--border)] bg-slate-100 dark:bg-[var(--surface)] px-3 py-1 text-xs font-mono font-semibold mb-6 uppercase tracking-wider text-slate-700 dark:text-slate-300">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]"><path d="M4 10h16"/><path d="M4 14h16"/></svg>
          System Module: Central Hub
        </div>
        
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[var(--fg)] dark:text-[var(--fg)] sm:text-5xl md:text-6xl mb-6">
          Technical Interview Preparation Hub
        </h1>
        
        <p className="max-w-2xl text-lg text-slate-600 dark:text-[var(--fg-muted)] font-medium mb-8">
          Select a simulator module below to begin. Includes comprehensive modules for networking, security, cloud, DevOps, Linux, Azure, and IAM.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#question-sets"
            className="group relative inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-950"
          >
            Select Module
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

