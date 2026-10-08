interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-col items-start gap-4 w-full max-w-full">
      <div className="w-full">
        <div className="flex flex-wrap gap-2 w-full">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`grow text-center rounded px-3 py-1.5 text-sm font-semibold transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] shadow-sm ${
                selectedCategory === category
                  ? 'bg-[var(--accent)] border-[var(--accent)] text-white shadow-md'
                  : 'bg-white border-[var(--border)] text-[var(--fg-muted)] hover:bg-[var(--surface-2)] hover:border-[var(--border)] hover:text-[var(--fg)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

