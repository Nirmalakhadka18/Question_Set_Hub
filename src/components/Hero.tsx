const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-16 md:pt-24 pb-12 md:pb-16">
      <div className="mx-auto max-w-[100rem] px-4 md:px-8 xl:px-16 text-center">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-3 py-1.5 text-xs sm:text-sm font-semibold mb-5 shadow-sm uppercase tracking-wider">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M4 10h16"/><path d="M4 14h16"/></svg>
          <span className="text-gray-700 dark:text-gray-300">INTERVIEW PREPARATION HUB</span>
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 ml-1"></span>
        </div>
        
        <h1 className="mx-auto max-w-[90rem] text-5xl font-extrabold tracking-tighter text-gray-900 dark:text-gray-100 sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.05]">
          Your Central Hub for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-red-500">Technical Interview Preparation</span>
        </h1>
        
        <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-500 dark:text-gray-400 sm:text-xl font-medium">
          Explore curated question sets covering networking, security, cloud, DevOps, Linux, Azure, IAM and more — all from one place.
        </p>
        
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#question-sets"
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-[#E33226] px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-red-700 hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(227,50,38,0.3)] dark:shadow-[0_8px_20px_rgba(227,50,38,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
          >
            Explore Question Sets
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#question-sets"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-8 py-3.5 text-base font-bold text-gray-700 dark:text-gray-300 transition-all hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
          >
            View Categories
          </a>
        </div>
      </div>
    </section>
  );
}
