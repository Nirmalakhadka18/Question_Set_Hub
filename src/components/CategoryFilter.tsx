interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <div className="flex w-full overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`rounded-md px-3 py-1.5 text-xs font-mono font-semibold transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] shadow-sm ${
                selectedCategory === category
                  ? 'bg-[var(--accent)] border-[var(--accent)] text-[#0b1120] shadow-md focus-visible:ring-offset-[var(--bg)]'
                  : 'bg-[var(--surface)] border-[var(--border)] text-[var(--fg-muted)] hover:bg-[var(--surface-2)] hover:border-[var(--border)] hover:text-[var(--fg)]'
              }`}
            >
              {category}
            </button>
          ))}
          {/* Spacer to prevent WebKit from clipping the right edge on scroll */}
          <div className="w-1 shrink-0 sm:hidden"></div>
        </div>
      </div>
    </div>
  );
}

