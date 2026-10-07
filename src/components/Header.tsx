export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 md:px-8 lg:px-12 xl:px-14 h-14">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-[var(--accent)] text-white font-bold text-sm tracking-tight">
            NH
          </div>
          <span className="text-lg font-bold text-[var(--fg)] tracking-tight">NHPREP Interview</span>
        </div>
      </div>
    </header>
  );
}

