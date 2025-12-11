import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { SearchResultsPage } from './components/SearchResultsPage';
import { ListingDetailPage } from './components/ListingDetailPage';
import { ChatPage } from './components/ChatPage';
import { ShoppingPage } from './components/ShoppingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'search' | 'listing' | 'chat' | 'shopping'>('home');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage('search');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSearchQuery('');
  };

  const handleViewListing = () => {
    setCurrentPage('listing');
  };

  const handleGoToChat = () => {
    setCurrentPage('chat');
  };

  const handleBackToListing = () => {
    setCurrentPage('listing');
  };

  const handleGoToShopping = () => {
    setCurrentPage('shopping');
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'home' && (
        <HomePage 
          onSearch={handleSearch} 
          onGoToChat={handleGoToChat}
          onGoToShopping={handleGoToShopping}
        />
      )}
      {currentPage === 'search' && (
        <SearchResultsPage 
          searchQuery={searchQuery} 
          onBackToHome={handleBackToHome}
          onViewListing={handleViewListing}
          onGoToChat={handleGoToChat}
        />
      )}
      {currentPage === 'listing' && (
        <ListingDetailPage 
          onBackToHome={handleBackToHome}
          onGoToChat={handleGoToChat}
        />
      )}
      {currentPage === 'chat' && (
        <ChatPage 
          onBackToHome={handleBackToHome}
          onBack={handleBackToListing}
        />
      )}
      {currentPage === 'shopping' && (
        <ShoppingPage
          onBackToHome={handleBackToHome}
          onGoToChat={handleGoToChat}
          onSearch={handleSearch}
        />
      )}
    </div>
  );
}