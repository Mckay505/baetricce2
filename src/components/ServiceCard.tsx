
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, imageUrl, className }: ServiceCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group", className)}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6 relative">
        <div className="absolute -top-8 left-6 bg-catering-700 rounded-full p-3 shadow-lg">
          <Icon className="h-6 w-6 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold mt-2 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
