const SearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <SearchIcon className="h-4 w-4 text-[var(--fg-muted)]" />
      </div>
      <input
        type="search"
        className="block w-full rounded border border-[var(--border)] bg-white py-1.5 pl-10 pr-3 text-sm text-[var(--fg)] shadow-sm transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] placeholder:text-[var(--fg-muted)]"
        placeholder="Search question sets..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search question sets"
      />
    </div>
  );
}

