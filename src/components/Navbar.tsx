
import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <ChefHat className="h-8 w-8 text-catering-700" />
          <span className="font-playfair text-xl md:text-2xl font-bold">Gourmet Catering</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-800 hover:text-catering-700 transition-colors">About</a>
          <a href="#services" className="text-gray-800 hover:text-catering-700 transition-colors">Services</a>
          <a href="#menu" className="text-gray-800 hover:text-catering-700 transition-colors">Menu</a>
          <a href="#testimonials" className="text-gray-800 hover:text-catering-700 transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-800 hover:text-catering-700 transition-colors">Contact</a>
          <Button className="bg-catering-700 hover:bg-catering-800">Book Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${
        isMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
      }`}>
        <div className="container-custom flex flex-col space-y-4">
          <a href="#about" className="text-gray-800 hover:text-catering-700 transition-colors py-2" onClick={toggleMenu}>About</a>
          <a href="#services" className="text-gray-800 hover:text-catering-700 transition-colors py-2" onClick={toggleMenu}>Services</a>
          <a href="#menu" className="text-gray-800 hover:text-catering-700 transition-colors py-2" onClick={toggleMenu}>Menu</a>
          <a href="#testimonials" className="text-gray-800 hover:text-catering-700 transition-colors py-2" onClick={toggleMenu}>Testimonials</a>
          <a href="#contact" className="text-gray-800 hover:text-catering-700 transition-colors py-2" onClick={toggleMenu}>Contact</a>
          <Button className="bg-catering-700 hover:bg-catering-800 w-full" onClick={toggleMenu}>Book Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
