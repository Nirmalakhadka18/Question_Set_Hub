import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import QuestionSetCard from './components/QuestionSetCard';
import Footer from './components/Footer';
import { questionSets, categories } from './data/questionSets';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSets = useMemo(() => {
    return questionSets.filter((set) => {
      const matchesSearch = 
        set.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        set.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        set.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || set.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[var(--bg)] dark:bg-[var(--bg)] font-sans text-[var(--fg)] dark:text-[var(--fg)] selection:bg-[var(--accent)]/30 selection:text-blue-200 overflow-x-hidden">
      <div className="bg-[var(--surface)] text-slate-300 py-1.5 px-4 text-[11px] sm:text-xs font-mono font-medium tracking-wide text-center flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 w-full border-b border-[var(--border)]">
        <span>System Status: Online</span>
        <span className="text-slate-600 hidden sm:inline">•</span>
        <span className="hidden sm:inline">12 Modules Available</span>
      </div>
      <Header />
      
      <main>
        <Hero />
        <Stats />
        
        <section id="question-sets" className="pt-12 md:pt-16 pb-16">
          <div className="mx-auto max-w-7xl px-4 md:px-8 xl:px-16">
            <div className="mb-10 text-left max-w-2xl">
              <h2 className="text-2xl font-bold text-[var(--fg)] dark:text-[var(--fg)] sm:text-3xl">Module Directory</h2>
              <p className="mt-3 text-base text-slate-600 dark:text-[var(--fg-muted)]">Select a module category or search for specific technical topics.</p>
            </div>
            
            <div className="mb-10 flex flex-col items-start gap-5 w-full">
              <div className="w-full max-w-xl">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
              <CategoryFilter 
                categories={categories} 
                selectedCategory={selectedCategory} 
                onSelectCategory={setSelectedCategory} 
              />
            </div>
            
            {filteredSets.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredSets.map((set) => (
                  <QuestionSetCard key={set.id} set={set} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center rounded-lg border border-[var(--border)] dark:border-[var(--border)] bg-[var(--surface)] dark:bg-[var(--surface)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-slate-100 dark:bg-[var(--surface-2)] mb-4">
                  <svg className="h-8 w-8 text-[var(--fg-muted)] dark:text-[var(--fg-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--fg)] dark:text-[var(--fg)]">No modules found</h3>
                <p className="mt-2 text-sm text-[var(--fg-muted)] dark:text-[var(--fg-muted)] max-w-md mx-auto">
                  No modules match your current filter criteria.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-6 rounded-md bg-[var(--surface-2)] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

