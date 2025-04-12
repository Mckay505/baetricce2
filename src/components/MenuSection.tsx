
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const menuItems = [
    {
      name: "Jollof Rice with Chicken",
      description: "Spicy rice dish cooked in a rich tomato and pepper sauce, served with grilled chicken and fried plantains",
      price: "GH₵85",
      image: "https://images.unsplash.com/photo-1644372723344-fba4c0db2ddc?q=80&w=2070&auto=format&fit=crop",
      category: "Main Course",
      dietary: ["Gluten-Free"],
      featured: true,
      type: "mains"
    },
    {
      name: "Waakye",
      description: "Rice and beans cooked together with millet leaves, served with stew, spaghetti, gari, and fried plantain",
      price: "GH₵65",
      image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=2070&auto=format&fit=crop",
      category: "Main Course",
      dietary: ["Vegetarian option available"],
      type: "mains"
    },
    {
      name: "Kelewele",
      description: "Spicy fried plantains seasoned with ginger, cayenne pepper, and other spices",
      price: "GH₵35",
      category: "Appetizer",
      dietary: ["Vegan", "Gluten-Free"],
      type: "appetizers"
    },
    {
      name: "Ghanaian Meze Platter",
      description: "Selection of Kelewele, Meat Pie, Shito Dip, Roast Peanuts, and Fried Yam",
      price: "GH₵95",
      image: "https://images.unsplash.com/photo-1695653422259-8a74ffe90bf6?q=80&w=2070&auto=format&fit=crop",
      category: "Sharing Platter",
      featured: true,
      type: "appetizers"
    },
    {
      name: "Banku with Tilapia",
      description: "Fermented corn and cassava dough served with grilled tilapia, pepper sauce, and fresh vegetables",
      price: "GH₵110",
      image: "https://images.unsplash.com/photo-1573806196892-8e9021f320cc?q=80&w=2070&auto=format&fit=crop",
      category: "Main Course",
      dietary: ["Gluten-Free"],
      featured: true,
      type: "mains"
    },
    {
      name: "Kontomire Stew",
      description: "Cocoyam leaves cooked with egusi seeds, smoked fish, and palm oil, served with boiled yam or plantain",
      price: "GH₵70",
      category: "Main Course",
      dietary: ["Gluten-Free"],
      type: "mains"
    },
    {
      name: "Groundnut Soup",
      description: "Rich peanut-based soup with tender goat meat, served with fufu or rice balls",
      price: "GH₵75",
      category: "Soup",
      type: "mains"
    },
    {
      name: "Fufu with Light Soup",
      description: "Pounded cassava and plantain dumpling served with spicy broth containing goat meat or fish",
      price: "GH₵95",
      image: "https://images.unsplash.com/photo-1641277667902-1776a952c861?q=80&w=2071&auto=format&fit=crop",
      category: "Main Course",
      featured: true,
      type: "mains"
    },
    {
      name: "Boflot (Ghanaian Donuts)",
      description: "Sweet, fluffy deep-fried dough balls, lightly dusted with sugar",
      price: "GH₵25",
      category: "Dessert",
      dietary: ["Vegetarian"],
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
          <h2 className="section-title">Authentic Ghanaian Menu</h2>
          <p className="section-subtitle">
            Our menus showcase authentic Ghanaian flavors with modern presentation. Here's a sampling of our most popular dishes.
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
            This is just a small selection from our extensive Ghanaian menu. 
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
