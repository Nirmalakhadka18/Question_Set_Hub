const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // General colors
  content = content.replace(/bg-white/g, 'bg-white dark:bg-gray-900');
  content = content.replace(/bg-gray-50/g, 'bg-gray-50 dark:bg-gray-950');
  content = content.replace(/text-gray-900/g, 'text-gray-900 dark:text-gray-100');
  content = content.replace(/text-gray-800/g, 'text-gray-800 dark:text-gray-200');
  content = content.replace(/text-gray-600/g, 'text-gray-600 dark:text-gray-400');
  content = content.replace(/text-gray-500/g, 'text-gray-500 dark:text-gray-400');
  
  // Borders
  content = content.replace(/border-gray-200/g, 'border-gray-200 dark:border-gray-800');
  content = content.replace(/border-gray-100/g, 'border-gray-100 dark:border-gray-800');
  
  // Specific backgrounds
  content = content.replace(/bg-blue-50/g, 'bg-blue-50 dark:bg-blue-900/20');
  content = content.replace(/hover:bg-gray-50/g, 'hover:bg-gray-50 dark:hover:bg-gray-800');
  
  // Inputs
  content = content.replace(/focus:border-blue-500/g, 'focus:border-blue-500 dark:focus:border-blue-400');

  fs.writeFileSync(filePath, content, 'utf-8');
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath);
    } else if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) {
      updateFile(dirPath);
    }
  });
}

walkDir(directoryPath);
console.log('Dark mode classes added!');
