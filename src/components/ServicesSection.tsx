
import React from 'react';
import ServiceCard from './ServiceCard';
import { UtensilsCrossed, Users, Cake, Wine, Building, PartyPopper } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Corporate Events",
      description: "Impress clients and colleagues with our professional catering for meetings, conferences, and company celebrations.",
      icon: Building,
      imageUrl: "https://images.unsplash.com/photo-1611355724042-21f5e0feaa4f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Weddings",
      description: "Make your special day unforgettable with customized menus and elegant service that reflect your unique love story.",
      icon: Cake,
      imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Private Dining",
      description: "Turn your home into an exclusive restaurant with our personal chef service for intimate gatherings and special occasions.",
      icon: UtensilsCrossed,
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Social Gatherings",
      description: "From birthday parties to family reunions, we create festive food experiences that bring people together.",
      icon: PartyPopper,
      imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Cocktail Receptions",
      description: "Mingle in style with our elegant appetizers and expert bartending service for sophisticated social events.",
      icon: Wine,
      imageUrl: "https://images.unsplash.com/photo-1605270012917-bf357a1fdf33?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Gala Dinners",
      description: "Elevate your fundraisers and formal events with exquisite multi-course menus and white-glove service.",
      icon: Users,
      imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Catering Services</h2>
          <p className="section-subtitle">
            We offer a range of catering services tailored to your specific event needs, 
            ensuring every occasion is memorable and deliciously satisfying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="button-primary bg-catering-700">
            Request Custom Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
