import { useState } from 'react';
import { Header } from './Header';
import { ListingCard } from './ListingCard';
import { ChevronDown } from 'lucide-react';

import img1 from "figma:asset/86637e879c6a5d73c920e28df6f74bd2cf5e1afe.png";
import img2 from "figma:asset/b72aaecf1ded1f7e5b3dc8fcaa6d95acfb85a6e3.png";
import img3 from "figma:asset/4db3d96f7b07f84fa2e5dc6ef16f12a57febbd21.png";
import img4 from "figma:asset/f51bc90e8e4fd49fce07c0bb9ec827da8e2e21dd.png";
import img5 from "figma:asset/dd4e52088c93b2e1d30cdaae17a3b3a3d6b165c1.png";
import img6 from "figma:asset/f06ccb04e3c7fb8d7d4c7ee38c8a23e1bc4ad7c2.png";
import img7 from "figma:asset/9af942e51951336b59367efc6b8050b08ed67dc9.png";
import img8 from "figma:asset/99e069a6ebc372d3523349eb9caeddfae5c19f7f.png";

interface SearchResultsPageProps {
  searchQuery: string;
  onBackToHome: () => void;
}

export function SearchResultsPage({ searchQuery, onBackToHome }: SearchResultsPageProps) {
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
            <ListingCard
              key={listing.id}
              {...listing}
              isFavorite={favorites.includes(listing.id)}
              onToggleFavorite={() => toggleFavorite(listing.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}