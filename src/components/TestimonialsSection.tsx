
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The food was simply outstanding. Our wedding guests are still raving about the menu, and the service was flawless from start to finish.",
      author: "Emily & David Ntumy",
      role: "Wedding Clients",
      rating: 5,
      event: "Wedding Reception",
      image: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?q=80&w=2187&auto=format&fit=crop"
    },
    {
      quote: "Gourmet Catering handled our corporate event with professionalism and creativity. The presentation was as impressive as the taste.",
      author: "Michael Asare",
      role: "Marketing Director",
      rating: 5,
      event: "Annual Corporate Gala"
    },
    {
      quote: "I've worked with many caterers over the years, but none compare to the quality and attention to detail that this team provides.",
      author: "Sarah Lomotey",
      role: "Event Planner",
      rating: 5,
      event: "Charity Fundraiser"
    },
    {
      quote: "Our family reunion was a success thanks to the amazing spread they provided. They accommodated all our dietary needs without sacrificing flavor.",
      author: "Robert Anderson",
      role: "Private Client",
      rating: 4,
      event: "Family Gathering"
    },
    {
      quote: "The tasting session alone was enough to convince us we had found the perfect caterer. They delivered on every promise and more.",
      author: "Jennifer & Mark Adjei",
      role: "Wedding Clients",
      rating: 5,
      event: "Wedding Reception"
    },
    {
      quote: "Not only was the food exceptional, but the staff was friendly and professional. They made our event stress-free and memorable.",
      author: "Lisa Ayitey",
      role: "Birthday Celebrant",
      rating: 5,
      event: "50th Birthday Party",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-catering-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear from clients who have experienced our catering service firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              event={testimonial.event}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
