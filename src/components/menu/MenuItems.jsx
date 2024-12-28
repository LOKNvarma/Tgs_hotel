
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryMenuItems = () => {
  const { category } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
       
        const response = await fetch(`https://hotel-tgs.onrender.com/menu/get-all-menu-items?category=${category}`);
        const data = await response.json();
        setMenuItems(data.menuItems || []); // Assuming `data.items` contains the menu items
      } catch (err) {
        setError("Failed to load menu items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, [category]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p className="text-lg font-semibold">Loading items...</p>
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
      <div className="max-w-7xl mx-auto mt-8 px-4">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-600 mb-8">
          Items : &nbsp; {category}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-md hover:bg-gray-900  shadow-sm transform transition duration-500  hover:shadow-lg hover:shadow-yellow-400"
            >
              <img
                src={item.image || "default-image-url"}
                alt={item.name}
                className="w-full h-56 hover:scale-105 duration-700 object-cover rounded-md mb-4"
              />
              <h3 className="text-md font-semibold text-lg text-yellow-200">{item.englishName} &nbsp;/ <span className="text-md  text-sm text-yellow-400">&nbsp;{item.hindiName}</span></h3>
              <p className=" text-gray-300 hover:text-green-500 mt-2">Price : {item.price}  &#8377;/-</p>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryMenuItems;
