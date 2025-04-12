
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start">
        <Phone className="h-5 w-5 text-catering-700 mt-1 mr-4" />
        <div>
          <h4 className="font-semibold mb-1">Phone</h4>
          <p className="text-gray-600">Main Office: (233) 24-456-7890</p>
          <p className="text-gray-600">Bookings: (233) 20-123-4567</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <Mail className="h-5 w-5 text-catering-700 mt-1 mr-4" />
        <div>
          <h4 className="font-semibold mb-1">Email</h4>
          <p className="text-gray-600">info@beatricemortey.com</p>
          <p className="text-gray-600">bookings@beatricemortey.com</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <MapPin className="h-5 w-5 text-catering-700 mt-1 mr-4" />
        <div>
          <h4 className="font-semibold mb-1">Location</h4>
          <p className="text-gray-600">123 Cantonments Road</p>
          <p className="text-gray-600">Accra, Ghana</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <Clock className="h-5 w-5 text-catering-700 mt-1 mr-4" />
        <div>
          <h4 className="font-semibold mb-1">Business Hours</h4>
          <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
          <p className="text-gray-600">Sunday: Closed (By Appointment Only)</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
