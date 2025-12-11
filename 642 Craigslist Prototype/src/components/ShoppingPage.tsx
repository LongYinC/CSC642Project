import { useState } from 'react';
import { Header } from './Header';
import { ListingCard } from './ListingCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ShoppingPageProps {
  onBackToHome: () => void;
  onGoToChat: () => void;
  onSearch: (query: string) => void;
}

export function ShoppingPage({ onBackToHome, onGoToChat, onSearch }: ShoppingPageProps) {
  const [searchInput, setSearchInput] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleSearch = (query: string) => {
    onSearch(query);
  };

  const listings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1678273562595-9a6b01322c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwdC1zaGlydHxlbnwxfHx8fDE3NjUxMzkwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Blue Cotton T-Shirt',
      price: 15.00
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHQtc2hpcnR8ZW58MXx8fHwxNzY1MTE3MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'White Basic Tee',
      price: 12.00
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1711641066085-5236bf7afcd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHQtc2hpcnR8ZW58MXx8fHwxNzY1MDYzNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Black Classic T-Shirt',
      price: 18.00
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1575737132307-1fad104f1f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB0LXNoaXJ0fGVufDF8fHx8MTc2NTE2MDIzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Red Sport Tee',
      price: 20.00
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1759572095329-1dcf9522762b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHQtc2hpcnR8ZW58MXx8fHwxNzY1MTYwMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Green Casual Shirt',
      price: 16.00
    }
  ];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < listings.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const visibleListings = listings.slice(currentIndex, currentIndex + 3);

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
        <h1 className="text-purple-800 mb-12 text-center text-[80px]">Shopping</h1>

        {/* Carousel Section */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center gap-8">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="text-purple-800 disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
            >
              <ChevronLeft className="w-12 h-12" strokeWidth={3} />
            </button>

            {/* Listings */}
            <div className="flex gap-8 items-center justify-center">
              {visibleListings.map((listing) => (
                <div key={listing.id} className="w-64">
                  <ListingCard
                    {...listing}
                    isFavorite={favorites.includes(listing.id)}
                    onToggleFavorite={() => toggleFavorite(listing.id)}
                  />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              disabled={currentIndex >= listings.length - 3}
              className="text-purple-800 disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
            >
              <ChevronRight className="w-12 h-12" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-4 gap-x-16 gap-y-8 max-w-5xl mx-auto">
          <button className="text-left hover:underline">Men's Clothing</button>
          <button className="text-left hover:underline">Women's Clothing</button>
          <button className="text-left hover:underline">Child's Clothing</button>
          <button className="text-left hover:underline">Swim Wear</button>

          <button className="text-left hover:underline">Casual</button>
          <button className="text-left hover:underline">Formal</button>
          <button className="text-left hover:underline">Sport</button>
          <button className="text-left hover:underline">Street Wear</button>

          <button className="text-left hover:underline">Tops</button>
          <button className="text-left hover:underline">Bottoms</button>
          <button className="text-left hover:underline">Dresses</button>
          <button className="text-left hover:underline">Outer Wear</button>

          <button className="text-left hover:underline">Vintage</button>
          <button className="text-left hover:underline">Work Wear</button>
          <button className="text-left hover:underline">Sleep Wear</button>
          <button className="text-left hover:underline">Garments</button>
        </div>
      </div>
    </div>
  );
}