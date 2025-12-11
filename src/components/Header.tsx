import { Search, Heart, User, Bell, ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  onSearch: (query: string) => void;
  onLogoClick?: () => void;
  onChatClick?: () => void;
}

export function Header({ searchInput, setSearchInput, onSearch, onLogoClick, onChatClick }: HeaderProps) {
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showBrowseDropdown, setShowBrowseDropdown] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
    }
  };

  const categories = [
    'All Categories',
    'Community',
    'Services',
    'Housing',
    'Jobs',
    'Shopping',
    'Forums'
  ];

  return (
    <header className="bg-purple-900 text-white py-3 px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <h1 
            onClick={onLogoClick}
            className="tracking-tight text-[32px] cursor-pointer hover:opacity-90 transition-opacity"
          >
            craigslist
          </h1>
          <nav className="flex gap-6">
            <div className="relative">
              <button 
                onClick={() => setShowBrowseDropdown(!showBrowseDropdown)}
                className="hover:underline flex items-center gap-1"
              >
                Browse Categories
                <ChevronDown className="w-4 h-4" />
              </button>
              {showBrowseDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white text-gray-900 rounded-md shadow-lg py-2 w-48 z-10">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => setShowBrowseDropdown(false)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-1 max-w-md mx-8">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search for anything..."
              className="w-full pl-4 pr-4 py-2 rounded-full text-gray-900 bg-white"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-full transition-colors flex items-center justify-center"
          >
            <Search className="w-5 h-5" />
          </button>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
              className="bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded-full transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Categories
              <ChevronDown className="w-4 h-4" />
            </button>
            {showCategoriesDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white text-gray-900 rounded-md shadow-lg py-2 w-48 z-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => setShowCategoriesDropdown(false)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </form>

        <div className="flex items-center gap-4">
          <button className="bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded-full transition-colors">
            Sell
          </button>
          <button 
            onClick={onChatClick}
            className="bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded-full transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat
          </button>
          <button className="w-10 h-10 bg-purple-700 hover:bg-purple-600 rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-purple-700 hover:bg-purple-600 rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-purple-700 hover:bg-purple-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}