import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MenuSection = () => {
  const [menuData, setMenuData] = useState([]); // To hold menu data from API
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch menu data from API  
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://hotel-tgs.onrender.com/menu-category//menuGetAll");
  
        const data = await response.json();
        const categories = data.menuCategories;
        setMenuData(categories); // Assuming `data.data` contains the menu items
       
       
      } catch (err) {
        setError("Failed to load menu data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  // Add scroll animation to menu
  useEffect(() => {
    const handleScroll = () => {
      const menuItems = document.querySelectorAll(".menu-item");
      menuItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        } else {
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p className="text-lg font-semibold">Loading menu...</p>
      </div>
    );
    
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-red-500">
        <p className="text-lg font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mt-5 mb-12">
          <h2 className="text-4xl font-bold  text-yellow-200">All  Menu  Categories</h2>
          <p className="mt-4 text-yellow-50">Indulge in our exquisite and handcrafted dishes.</p>
        </div>
      
        {/* Menu Items */}
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
          {menuData.map((item, index) => (
            <Link to={`/menu/category/${item.englishName}`} key={index}>
            <div
              key={index}
              className="menu-item  bg-gray-800 p-6 rounded-lg  hover:bg-gray-900  transform transition duration-500 opacity-0 "
              style={{ transitionDelay: `${index * 50}ms` }}
            >
             
             <img
                src={item.image} // Fallback if no image
               
                className="w-full h-56 hover:scale-105 duration-700 object-cover shadow-black  rounded-md mb-4"
              />
            
              <h3 className="text-md font-semibold text-yellow-200">{item.englishName}</h3>
              <p className="text-yellow-50  font-semibold mt-2">{item.hindiName}</p>
        
            </div>
           </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default MenuSection;
