
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const menuItems = [
    {
      name: "Herb-Crusted Rack of Lamb",
      description: "Tender rack of lamb coated with herb crust, served with garlic mashed potatoes and seasonal vegetables",
      price: "$32",
      image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=2033&auto=format&fit=crop",
      category: "Main Course",
      dietary: ["Gluten-Free"],
      featured: true,
      type: "mains"
    },
    {
      name: "Wild Mushroom Risotto",
      description: "Creamy Arborio rice cooked with a medley of wild mushrooms, finished with truffle oil and Parmesan",
      price: "$24",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop",
      category: "Main Course",
      dietary: ["Vegetarian"],
      type: "mains"
    },
    {
      name: "Seared Scallops",
      description: "Pan-seared sea scallops with citrus beurre blanc, served on a bed of saffron-infused risotto",
      price: "$28",
      category: "Appetizer",
      dietary: ["Gluten-Free"],
      type: "appetizers"
    },
    {
      name: "Charcuterie Board",
      description: "Selection of artisanal cheeses, cured meats, house-made pâté, seasonal fruits, nuts, and crackers",
      price: "$36",
      image: "https://images.unsplash.com/photo-1626200419199-391ae4be7f34?q=80&w=2033&auto=format&fit=crop",
      category: "Sharing Platter",
      featured: true,
      type: "appetizers"
    },
    {
      name: "Chocolate Fondant",
      description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream and raspberry coulis",
      price: "$14",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2070&auto=format&fit=crop",
      category: "Dessert",
      dietary: ["Vegetarian"],
      featured: true,
      type: "desserts"
    },
    {
      name: "Grilled Mediterranean Vegetables",
      description: "Seasonal vegetables marinated in herbs and olive oil, grilled to perfection and drizzled with balsamic glaze",
      price: "$18",
      category: "Side Dish",
      dietary: ["Vegan", "Gluten-Free"],
      type: "sides"
    },
    {
      name: "Lobster Bisque",
      description: "Rich and creamy soup made from lobster stock, brandy, and fresh herbs, garnished with lobster meat",
      price: "$16",
      category: "Soup",
      type: "appetizers"
    },
    {
      name: "Beef Wellington",
      description: "Tenderloin of beef wrapped in puff pastry with mushroom duxelles, served with red wine reduction",
      price: "$42",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
      category: "Main Course",
      featured: true,
      type: "mains"
    },
    {
      name: "Fresh Berry Pavlova",
      description: "Light and crisp meringue topped with whipped cream and fresh seasonal berries",
      price: "$12",
      category: "Dessert",
      dietary: ["Vegetarian", "Gluten-Free"],
      type: "desserts"
    }
  ];

  const filteredItems = activeTab === "all" 
    ? menuItems 
    : menuItems.filter(item => item.type === activeTab);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Sample Menu Selections</h2>
          <p className="section-subtitle">
            Our menus are customizable to suit your event needs. Here's a sampling of our most popular dishes.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all" className="text-sm sm:text-base">All Items</TabsTrigger>
              <TabsTrigger value="appetizers" className="text-sm sm:text-base">Appetizers</TabsTrigger>
              <TabsTrigger value="mains" className="text-sm sm:text-base">Main Courses</TabsTrigger>
              <TabsTrigger value="desserts" className="text-sm sm:text-base">Desserts</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="appetizers" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mains" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            This is just a small selection from our extensive menu. 
            Contact us to create a custom menu for your event.
          </p>
          <Button className="button-primary bg-catering-700">
            Download Full Menu PDF
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
