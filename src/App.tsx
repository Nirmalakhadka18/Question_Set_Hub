import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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
    <div className="min-h-screen bg-[var(--bg)] font-sans text-[var(--fg)] selection:bg-[var(--accent)]/30 selection:text-[var(--accent)] overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        
        <section id="question-sets" className="py-8">
          <div className="mx-auto max-w-7xl px-4 md:px-8 xl:px-16">
            <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-[var(--fg)] sm:text-2xl">Question Sets</h2>
                <div className="mt-2 flex items-center gap-3 text-xs font-mono text-[var(--fg-muted)]">
                  <span className="bg-[var(--surface-2)] px-2 py-1 rounded">12 QUESTION SETS</span>
                  <span className="bg-[var(--surface-2)] px-2 py-1 rounded">11 TOPICS</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8 flex flex-col items-start gap-4 w-full">
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
              <div className="flex flex-col items-center justify-center py-20 text-center rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[var(--surface-2)] mb-4">
                  <svg className="h-8 w-8 text-[var(--fg-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--fg)]">No question sets found</h3>
                <p className="mt-2 text-sm text-[var(--fg-muted)] max-w-md mx-auto">
                  No question sets match your current filter criteria.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-6 rounded-md bg-[var(--surface-2)] px-5 py-2 text-sm font-semibold text-[var(--fg)] shadow-sm hover:bg-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-colors"
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


