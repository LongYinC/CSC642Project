import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { SearchResultsPage } from './components/SearchResultsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'search'>('home');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage('search');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'home' ? (
        <HomePage onSearch={handleSearch} />
      ) : (
        <SearchResultsPage searchQuery={searchQuery} onBackToHome={handleBackToHome} />
      )}
    </div>
  );
}
