
import React from 'react';
import { Button } from "@/components/ui/button";

const TastingSession = () => {
  return (
    <div className="mt-10 p-6 bg-catering-50 rounded-lg border border-catering-100">
      <h4 className="font-semibold mb-3">Book a Tasting Session</h4>
      <p className="text-gray-600 mb-4">
        Experience our authentic Ghanaian cuisine firsthand before making your decision. 
        Schedule a complimentary tasting session with Chef Beatrice.
      </p>
      <Button variant="outline" className="border-catering-700 text-catering-700 hover:bg-catering-50">
        Schedule Tasting
      </Button>
    </div>
  );
};

export default TastingSession;
