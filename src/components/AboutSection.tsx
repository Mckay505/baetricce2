
import React from 'react';
import { Utensils, Award, Clock, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">About Our Catering Service</h2>
          <p className="section-subtitle">
            With over 15 years of culinary excellence, we create memorable dining experiences
            through creative cuisine and impeccable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-gray-900">
              Crafting Culinary Experiences Since 2008
            </h3>
            <p className="text-gray-600">
              Our journey began with a simple passion for creating extraordinary food. Today, 
              we've evolved into a premier catering service, known for our commitment to quality 
              and attention to detail.
            </p>
            <p className="text-gray-600">
              Every dish we prepare is crafted with fresh, locally-sourced ingredients, 
              combining innovative techniques with time-honored culinary traditions. Our team 
              of experienced chefs works closely with clients to customize menus that reflect 
              their taste, style, and dietary preferences.
            </p>
            <p className="text-gray-600">
              Whether you're planning an intimate dinner party, corporate event, or dream 
              wedding, we're dedicated to exceeding your expectations and making your 
              occasion truly unforgettable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Utensils className="h-10 w-10 text-catering-700 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Beatrice cuisine</h4>
              <p className="text-gray-600">
                We create exquisite dishes that blend innovation with tradition, using only the finest ingredients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-10 w-10 text-gold-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Award-Winning</h4>
              <p className="text-gray-600">
                Recognized for our culinary excellence and outstanding service in the catering industry.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="h-10 w-10 text-forest-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Timely Service</h4>
              <p className="text-gray-600">
                We pride ourselves on punctuality and flawless execution, from setup to cleanup.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-10 w-10 text-catering-700 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Expert Staff</h4>
              <p className="text-gray-600">
                Our team of professionals ensures your event runs smoothly and your guests are well taken care of.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
