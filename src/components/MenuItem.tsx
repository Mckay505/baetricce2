
import React from 'react';
import { cn } from '@/lib/utils';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  featured?: boolean;
  category: string;
  dietary?: string[];
}

const MenuItem = ({ name, description, price, image, featured = false, category, dietary = [] }: MenuItemProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg overflow-hidden transition-all duration-300 border",
      featured ? "shadow-lg border-gold-300" : "border-gray-200 hover:shadow-md"
    )}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500 uppercase">{category}</p>
          </div>
          <span className="text-catering-700 font-semibold">{price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        {dietary.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {dietary.map((item) => (
              <span 
                key={item} 
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        )}
        
        {featured && (
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-gold-600 text-sm font-medium">Chef's Recommendation</span>
            <span className="bg-gold-100 text-gold-800 px-2 py-1 rounded text-xs">Featured</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
