import { useState } from 'react';
import { Search } from 'lucide-react';
import { Header } from './Header';

interface HomePageProps {
  onSearch: (query: string) => void;
}

export function HomePage({ onSearch }: HomePageProps) {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
    }
  };

  const categories = [
    'Community',
    'Services',
    'Housing',
    'Jobs',
    'Shopping',
    'Forums'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header 
        searchInput={searchInput} 
        setSearchInput={setSearchInput} 
        onSearch={onSearch}
      />
      
      <div className="flex flex-col items-center justify-center px-4 pt-32">
        <h1 className="text-purple-800 mb-8">
          <span className="text-[120px] tracking-tight">craigslist</span>
        </h1>
        
        <p className="text-purple-800 mb-12">
          What are you looking to do today?
        </p>

        <div className="grid grid-cols-3 gap-6 max-w-2xl w-full">
          {categories.map((category) => (
            <button
              key={category}
              className="bg-gray-200 hover:bg-gray-300 transition-colors py-6 px-8 rounded-md"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}