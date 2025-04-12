
import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import TastingSession from './TastingSession';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Ready to plan your event? Reach out to us for a personalized catering experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Information */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-playfair font-semibold mb-6">Get in Touch</h3>
            
            <ContactInfo />
            
            <TastingSession />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
