export default function Stats() {
  const stats = [
    { value: '12', label: 'Question Sets' },
    { value: '10+', label: 'Technical Topics' },
    { value: '1', label: 'Central Hub' },
  ];

  return (
    <section className="bg-[var(--bg)] dark:bg-[var(--bg)] pb-4 pt-0">
      <div className="mx-auto max-w-7xl px-4 md:px-8 xl:px-16">
        <div className="mx-auto max-w-4xl rounded-md border border-[var(--border)] dark:border-[var(--border)] bg-[var(--surface)] dark:bg-[var(--surface)] p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center py-4 sm:py-0">
                <span className="text-3xl font-bold font-mono text-[var(--accent)] dark:text-[var(--accent)]">{stat.value}</span>
                <span className="mt-1 text-xs font-semibold text-[var(--fg-muted)] dark:text-[var(--fg-muted)] uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

