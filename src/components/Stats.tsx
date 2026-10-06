export default function Stats() {
  const stats = [
    { value: '12', label: 'Question Sets' },
    { value: '10+', label: 'Technical Topics' },
    { value: '1', label: 'Central Hub' },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 pb-4 pt-0">
      <div className="mx-auto max-w-[100rem] px-4 md:px-8 xl:px-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/50 p-8 shadow-sm">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold text-blue-600">{stat.value}</span>
                <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
