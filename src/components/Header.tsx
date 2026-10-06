import { useState, useEffect } from 'react';

const MenuIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const SunIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      aria-label="Toggle dark mode"
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] dark:border-[var(--border)] bg-[var(--bg)] dark:bg-[var(--bg)]/80 backdrop-blur-md shadow-sm transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 xl:px-16 h-16">
        <div className="flex items-center gap-8 lg:gap-12">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent)] text-white font-mono font-bold">
              Q
            </div>
            <span className="text-xl font-bold text-[var(--fg)] dark:text-[var(--fg)] tracking-tight">Question Set Hub</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a 
            href="#question-sets"
            className="group flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[var(--accent)] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-900"
          >
            Explore Modules
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button 
            className="p-2 text-slate-600 dark:text-[var(--fg-muted)] hover:text-[var(--fg)] dark:hover:text-[var(--fg)] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] dark:border-[var(--border)] bg-[var(--bg)] dark:bg-[var(--bg)] p-4 transition-colors duration-200">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-base font-medium text-[var(--fg)] dark:text-[var(--fg)]" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#question-sets" className="text-base font-medium text-slate-600 dark:text-[var(--fg-muted)]" onClick={() => setMobileMenuOpen(false)}>Question Sets</a>
            <a href="#question-sets" className="text-base font-medium text-slate-600 dark:text-[var(--fg-muted)]" onClick={() => setMobileMenuOpen(false)}>Categories</a>
            <a 
              href="#question-sets"
              className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-4 py-3 text-base font-semibold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore Modules
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

