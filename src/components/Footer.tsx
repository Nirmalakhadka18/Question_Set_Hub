export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] dark:bg-[var(--bg)] border-t border-[var(--border)] dark:border-[var(--border)] mt-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8 xl:px-16 py-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-[var(--accent)] text-white font-mono text-xs font-bold">
                  Q
                </div>
                <span className="text-base font-bold text-[var(--fg)] dark:text-[var(--fg)] tracking-tight">Question Set Hub</span>
              </div>
              <p className="text-sm text-[var(--fg-muted)] dark:text-[var(--fg-muted)] text-center md:text-left max-w-xs">
                Centralized access to technical interview preparation simulator modules.
              </p>
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-600 dark:text-[var(--fg-muted)] mb-8 md:mb-0">
            <a href="#" className="hover:text-[var(--accent)] transition-colors">Home</a>
            <a href="#question-sets" className="hover:text-[var(--accent)] transition-colors">Modules</a>
            <a href="#question-sets" className="hover:text-[var(--accent)] transition-colors">Categories</a>
          </nav>
        </div>
        
        <div className="mt-8 border-t border-[var(--border)] dark:border-[var(--border)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[var(--fg-muted)]">
          <p>&copy; {new Date().getFullYear()} Question Set Hub. System Module.</p>
        </div>
      </div>
    </footer>
  );
}

