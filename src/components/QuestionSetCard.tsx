import type { QuestionSet } from '../data/questionSets';

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
);

interface QuestionSetCardProps {
  set: QuestionSet;
  priority?: boolean;
}

export default function QuestionSetCard({ set, priority }: QuestionSetCardProps) {
  return (
    <a
      href={set.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between overflow-hidden rounded border border-[var(--border)] bg-white transition-all duration-200 hover:border-[var(--accent)] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] cursor-pointer"
    >
      <div>
        <div className="relative aspect-[4/3] w-full border-b border-[var(--border)] bg-[var(--surface-2)] overflow-hidden">
          <img 
            src={set.imageUrl} 
            alt={set.title} 
            className="h-full w-full object-cover object-center"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
          />
        </div>
        
        <div className="p-4 pb-0">
          <div className="mb-3 flex flex-wrap items-center justify-between w-full gap-2">
            <span className="inline-flex items-center justify-center rounded bg-[#2563eb] px-2 py-0.5 text-[11px] tracking-wider font-bold text-white shadow-sm whitespace-nowrap">
              {set.category}
            </span>
            <span className="text-[11px] font-semibold text-[var(--fg-muted)] tracking-wider whitespace-nowrap">
              SET {set.number}
            </span>
          </div>
          
          <h3 className="text-[17px] font-bold text-[var(--fg)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2 leading-snug">
            {set.title}
          </h3>
          
          <p className="text-sm font-normal text-[var(--fg-muted)] leading-relaxed mb-4 line-clamp-3">
            {set.description}
          </p>
        </div>
      </div>

      <div className="mt-auto px-4 pb-4">
        <div className="pt-3 border-t border-[var(--border)] flex items-center justify-end text-[13px] font-bold text-[var(--accent)] transition-colors">
          <span className="flex items-center gap-1">
            Open Question Set <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
