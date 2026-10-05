export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-[100rem] px-4 md:px-8 xl:px-16 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-white text-xs font-bold">
                  Q
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">Question Set Hub</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left max-w-xs">
                Centralized access to technical interview preparation resources.
              </p>
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-600 dark:text-gray-400 mb-8 md:mb-0">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#question-sets" className="hover:text-blue-600 transition-colors">Question Sets</a>
            <a href="#question-sets" className="hover:text-blue-600 transition-colors">Categories</a>
          </nav>
        </div>
        
        <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 Question Set Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
