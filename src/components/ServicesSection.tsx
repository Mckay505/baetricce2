
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
      imageUrl: "https://cateringculture.com.sg/wp-content/uploads/2020/08/Buffet-2.jpg",
    },
    {
      title: "Weddings",
      description: "Make your special day unforgettable with customized menus and elegant service that reflect your unique love story.",
      icon: Cake,
      imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Private Dining",
      description: "Turn your home into an exclusive restaurant with our personal Beatrice Mortey's chef service for intimate gatherings and special occasions.",
      icon: UtensilsCrossed,
      imageUrl: "https://fastly.4sqi.net/img/general/600x600/149837103_quUrzk3kjHduYCas6hQfYS5MWqhw2PGSCRygyw5ti5Y.jpg",
    },
    {
      title: "Social Gatherings",
      description: "From birthday parties to family reunions, we create festive food experiences that bring people together.",
      icon: PartyPopper,
      imageUrl: "https://i.pinimg.com/originals/1e/89/13/1e891356ce9dd34ca11cf35573f483c2.png",
    },
    {
      title: "funerals (we take orders for funeral events in Ghana",
      description: "Mingle in style with our elegant appetizers and expert bartending service for sophisticated social events.",
      icon: Wine,
      imageUrl: "https://images.pexels.com/photos/8865418/pexels-photo-8865418.jpeg",
    },
    {
      title: "food takeaways(u can make your own food combinations with different foods and package it for yourself or as a suprise for your loved ones!",
      description: "Elevate your fundraisers and formal events with exquisite multi-course menus and white-glove service.",
      icon: Users,
      imageUrl: "https://i.pinimg.com/750x/f6/0d/b0/f60db04a5c86ba7f041da715367ae404.jpg",
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
