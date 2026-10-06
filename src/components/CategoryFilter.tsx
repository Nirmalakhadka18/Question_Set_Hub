interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-col items-start gap-4 w-full max-w-full">
      <div className="flex w-full max-w-full overflow-x-auto pb-2">
        <div className="flex gap-2 min-w-max pr-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`rounded px-3 py-1 text-[13px] font-bold transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] shadow-sm ${
                selectedCategory === category
                  ? 'bg-[var(--accent)] border-[var(--accent)] text-white shadow-md'
                  : 'bg-white border-[var(--border)] text-[var(--fg-muted)] hover:bg-[var(--surface-2)] hover:border-[var(--border)] hover:text-[var(--fg)]'
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

