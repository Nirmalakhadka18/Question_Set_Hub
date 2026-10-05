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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <div className="bg-[#111111] text-gray-200 py-2.5 px-4 text-[11px] sm:text-xs font-semibold tracking-wide text-center flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 w-full">
        <span>Cloud & DevOps Sets</span>
        <span className="text-gray-600 hidden sm:inline">•</span>
        <span className="hidden sm:inline">System Design Guide</span>
        <span className="text-gray-600 hidden sm:inline">•</span>
        <span className="hidden sm:inline">Identity & Access</span>
        <span className="text-gray-600">•</span>
        <span className="bg-white/10 px-2 py-0.5 rounded-full text-[10px] text-white">COMING SOON</span>
        <span>AI Mock Interviews</span>
      </div>
      <Header />
      
      <main>
        <Hero />
        <Stats />
        
        <section id="question-sets" className="pt-8 md:pt-12 pb-8">
          <div className="mx-auto max-w-[100rem] px-4 md:px-8 xl:px-16">
            <div className="mb-8 md:mb-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">Explore Question Sets</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Choose a topic and start preparing.</p>
            </div>
            
            <div className="mb-12 flex flex-col items-center gap-6 w-full overflow-hidden">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <CategoryFilter 
                categories={categories} 
                selectedCategory={selectedCategory} 
                onSelectCategory={setSelectedCategory} 
              />
            </div>
            
            {filteredSets.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredSets.map((set) => (
                  <QuestionSetCard key={set.id} set={set} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
                  <svg className="h-10 w-10 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">No question sets found</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                  We couldn't find anything matching your search. Try adjusting your keywords or category filters.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-8 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950 transition-colors"
                >
                  Clear all filters
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
