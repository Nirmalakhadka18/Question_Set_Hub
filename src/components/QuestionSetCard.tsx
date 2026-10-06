import type { QuestionSet } from '../data/questionSets';

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
);

const CloudSecurityIcon = (props: any) => (
  <svg aria-hidden="true" {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9"/>
    <rect x="10" y="14" width="8" height="6" rx="1"/>
    <path d="M12 14v-1a2 2 0 1 1 4 0v1"/>
  </svg>
);

const InfinityIcon = (props: any) => (
  <svg aria-hidden="true" {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"/>
  </svg>
);

const SecurityIcon = (props: any) => (
  <svg aria-hidden="true" {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const NetworkIcon = (props: any) => (
  <svg aria-hidden="true" {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="16" y="16" width="6" height="6" rx="1"/>
    <rect x="2" y="16" width="6" height="6" rx="1"/>
    <rect x="9" y="2" width="6" height="6" rx="1"/>
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/>
    <path d="M12 12V8"/>
  </svg>
);

const CloudIcon = (props: any) => (
  <svg aria-hidden="true" {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  </svg>
);

const TerminalIcon = (props: any) => (
  <svg aria-hidden="true" {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" y1="19" x2="20" y2="19"/>
  </svg>
);

const UserIcon = (props: any) => (
  <svg aria-hidden="true" {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const DefaultIcon = (props: any) => (
  <svg aria-hidden="true" {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const CategoryIcon = ({ category }: { category: string }) => {
  const props = { className: "w-6 h-6" };
  
  if (category.includes('Cloud Security')) return <CloudSecurityIcon {...props} />;
  if (category.includes('Network Security') || category.includes('Firewall') || category.includes('SOC')) return <SecurityIcon {...props} />;
  if (category.includes('Security')) return <SecurityIcon {...props} />;
  if (category.includes('Network')) return <NetworkIcon {...props} />;
  if (category.includes('DevOps')) return <InfinityIcon {...props} />;
  if (category.includes('Cloud') || category.includes('Azure')) return <CloudIcon {...props} />;
  if (category.includes('Linux')) return <TerminalIcon {...props} />;
  if (category.includes('Identity') || category.includes('IAM')) return <UserIcon {...props} />;
  
  return <DefaultIcon {...props} />;
};

interface QuestionSetCardProps {
  set: QuestionSet;
}

export default function QuestionSetCard({ set }: QuestionSetCardProps) {
  return (
    <a
      href={set.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block flex flex-col justify-between rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] cursor-pointer"
    >
      <div>
        <div className="mb-4 flex flex-col items-start gap-3">
          <div className="flex items-center gap-3 w-full">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--surface-2)] text-[var(--accent)]">
              <CategoryIcon category={set.category} />
            </div>
            <span className="inline-flex items-center justify-center rounded bg-[var(--surface-2)] px-2 py-1 text-[11px] uppercase tracking-widest font-mono font-semibold text-[var(--fg-muted)]">
              {set.category}
            </span>
            <span className="ml-auto font-mono text-xs text-[var(--fg-muted)]">
              SET {set.number}
            </span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-[var(--fg)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
          {set.title}
        </h3>
        
        <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4 line-clamp-3">
          {set.description}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-[var(--border)]">
        <div
          className="flex items-center justify-end text-sm font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors"
        >
          <span className="flex items-center gap-1">
            Open Question Set <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </a>
  );
}

