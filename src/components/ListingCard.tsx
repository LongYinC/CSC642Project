import { Heart } from 'lucide-react';

interface ListingCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function ListingCard({ title, price, image, isFavorite, onToggleFavorite }: ListingCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="relative aspect-[4/3] bg-gray-100">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>
      <div className="p-3">
        <h3 className="text-gray-800 mb-1 line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-purple-800">${price}</span>
          <span className="text-gray-500 text-sm">Used</span>
        </div>
      </div>
    </div>
  );
}
