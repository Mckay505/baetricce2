
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  event?: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  rating, 
  event, 
  image, 
  className 
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1", 
      className
    )}>
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={i < rating ? "h-5 w-5 fill-gold-500 text-gold-500" : "h-5 w-5 text-gray-300"} 
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-700 mb-4 italic">"{quote}"</blockquote>
      
      {/* Author Info */}
      <div className="flex items-center">
        {image ? (
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-catering-100 text-catering-700 flex items-center justify-center font-bold mr-4">
            {author.charAt(0)}
          </div>
        )}
        
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
          {event && <p className="text-xs text-catering-700 mt-1">Event: {event}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
