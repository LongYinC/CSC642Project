import { useState } from 'react';
import { Header } from './Header';
import { ListingCard } from './ListingCard';
import { ChevronDown } from 'lucide-react';

import img1 from "figma:asset/9e42dfc4a042b088d4415fde72bf7e8f690009a5.png";
import img2 from "figma:asset/07da17402e3eb80f538c98ac2c6be47c5339ba85.png";
import img3 from "figma:asset/f26d23cf20ad5f9ec333234d256ea0e6801d278f.png";
import img4 from "figma:asset/10f386db802d5589a1fbebba59c0ea74665b05b0.png";
import img5 from "figma:asset/fa885c3eed8f2b12a7c53978ad131c1d9c5bee68.png";
import img6 from "figma:asset/1dd900df9c15a0bc358875ec7502f20051fe1ab0.png";
import img7 from "figma:asset/9af942e51951336b59367efc6b8050b08ed67dc9.png";
import img8 from "figma:asset/99e069a6ebc372d3523349eb9caeddfae5c19f7f.png";

interface SearchResultsPageProps {
  searchQuery: string;
  onBackToHome: () => void;
  onViewListing: () => void;
  onGoToChat: () => void;
}

export function SearchResultsPage({ searchQuery, onBackToHome, onViewListing, onGoToChat }: SearchResultsPageProps) {
  const [searchInput, setSearchInput] = useState(searchQuery);

  const handleSearch = (query: string) => {
    setSearchInput(query);
  };

  // Mock listings data
  const listings = [
    {
      id: 1,
      title: 'Wii For Sale - complete with controller',
      price: 79.99,
      image: img1,
      isFavorite: false
    },
    {
      id: 2,
      title: 'Complete White Wii',
      price: 64.99,
      image: img2,
      isFavorite: false
    },
    {
      id: 3,
      title: 'Wii - Black version',
      price: 99.99,
      image: img3,
      isFavorite: false
    },
    {
      id: 4,
      title: 'Nintendo Wii Console - New',
      price: 499.99,
      image: img4,
      isFavorite: false
    },
    {
      id: 5,
      title: 'Wii Console Complete',
      price: 50,
      image: img5,
      isFavorite: false
    },
    {
      id: 6,
      title: 'Wii With Games',
      price: 80,
      image: img6,
      isFavorite: false
    },
    {
      id: 7,
      title: 'Wii Console ONLY',
      price: 34.99,
      image: img7,
      isFavorite: false
    },
    {
      id: 8,
      title: 'Wii Console With Wheel',
      price: 39.99,
      image: img8,
      isFavorite: false
    }
  ];

  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        searchInput={searchInput} 
        setSearchInput={setSearchInput} 
        onSearch={handleSearch}
        onLogoClick={onBackToHome}
        onChatClick={onGoToChat}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-purple-800 mb-6 text-center">Search Results</h2>
        
        <div className="flex gap-4 mb-8 justify-center">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Item: Best Match
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Condition
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Price
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} onClick={onViewListing}>
              <ListingCard
                {...listing}
                isFavorite={favorites.includes(listing.id)}
                onToggleFavorite={() => toggleFavorite(listing.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}