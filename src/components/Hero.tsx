
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Authentic Ghanaian Cuisine <br />
          <span className="text-gold-400">For Every Occasion</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
          Experience the rich flavors and traditions of Ghana with Beatrice Mortey's premium catering services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="button-primary bg-catering-700 text-lg px-8 py-6">
            Explore Our Menu
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/20 text-lg px-8 py-6">
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
