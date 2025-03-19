import React, { useState, useEffect } from "react";
import cloth1 from '../upload/1.jpg';
import cloth2 from '../upload/2.jpg';
import cloth3 from '../upload/3.jpg';
import cloth4 from '../upload/4.jpg';
import cloth5 from '../upload/5.jpg';
import cloth6 from '../upload/6.jpg';
import girls1 from '../upload/girls1.jpg';
import girls2 from '../upload/girls2.jpg';
import girls3 from '../upload/girls3.jpg';
import girls4 from '../upload/girls4.jpg';
import girls5 from '../upload/girls5.jpg';
import girls6 from '../upload/girls6.jpg';

const boysClothes = [
    { id: 1, image: cloth1, price: 599, title: "Casual T-Shirt", description: "Comfortable cotton t-shirt perfect for everyday wear." },
    { id: 2, image: cloth2, price: 699, title: "Denim Jacket", description: "Stylish denim jacket for a trendy look." },
    { id: 3, image: cloth3, price: 1599, title: "Leather Jacket", description: "Premium leather jacket for a bold statement." },
    { id: 4, image: cloth4, price: 899, title: "Formal Shirt", description: "Elegant formal shirt ideal for office wear." },
    { id: 5, image: cloth5, price: 1299, title: "Hoodie", description: "Cozy hoodie for a relaxed and stylish vibe." },
    { id: 6, image: cloth6, price: 999, title: "Sweater", description: "Warm and comfortable sweater for chilly days." },
];

const girlsClothes = [
    { id: 1, image: girls1, price: 799, title: "Floral Dress", description: "Beautiful floral dress for a charming look." },
    { id: 2, image: girls2, price: 899, title: "Stylish Top", description: "Trendy top that pairs well with jeans." },
    { id: 3, image: girls3, price: 1599, title: "Designer Saree", description: "Elegant saree for special occasions." },
    { id: 4, image: girls4, price: 999, title: "Casual Hoodie", description: "Comfortable hoodie for a relaxed style." },
    { id: 5, image: girls5, price: 1299, title: "Jacket", description: "Stylish jacket to stay warm and fashionable." },
    { id: 6, image: girls6, price: 1199, title: "Elegant Gown", description: "Graceful gown perfect for evening events." },
];

const featuredItems = {
    boys: boysClothes[0],
    girls: girlsClothes[0],
};

function Clothes() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [category, setCategory] = useState("boys");

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        setSelectedItem(null);
    };

    const viewItem = (item) => {
        setSelectedItem(item);
    };

    const openMapNavigation = () => {
        const storeLocation = "https://www.google.com/maps/dir/?api=1&destination=27.7172,85.3240"; // Replace with actual store coordinates
        window.open(storeLocation, "_blank");
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Explore Our Collection</h1>
            
            {/* Category Selection */}
            <div className="flex justify-start mb-8">
                <button onClick={() => handleCategoryChange("boys")} className={`px-6 py-3 text-lg font-semibold rounded-lg border-2 border-black text-black ${category === "boys" ? "bg-black text-white" : "bg-transparent"}`}>Boys</button>
                <button onClick={() => handleCategoryChange("girls")} className={`ml-4 px-6 py-3 text-lg font-semibold rounded-lg border-2 border-black text-black ${category === "girls" ? "bg-black text-white" : "bg-transparent"}`}>Girls</button>
            </div>
            
            {/* Fixed Featured Item */}
            <div className="mb-12 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Item</h2>
                <img src={featuredItems[category].image} alt={featuredItems[category].title} className="w-full h-96 object-cover rounded-lg shadow-lg mb-4" />
                <p className="text-xl font-semibold text-gray-800">{featuredItems[category].title}</p>
            </div>

            {/* Display Clothes or Message */}
            {!selectedItem ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {(category === "boys" ? boysClothes : girlsClothes).map((item) => (
                        <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300">
                            <img src={item.image} alt={item.title} className="w-full h-72 object-cover cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => viewItem(item)} />
                            <div className="p-5 text-center">
                                <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                                <p className="text-gray-600 text-lg font-bold">Rs. {item.price}</p>
                                <button onClick={() => viewItem(item)} className="mt-4 w-full border-2 border-black text-black py-2 rounded-lg shadow-md hover:bg-black hover:text-white transition">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 overflow-hidden">
                        <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-110" />
                    </div>
                    <div className="w-full md:w-1/2 text-left">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">{selectedItem.title}</h2>
                        <p className="text-2xl font-semibold text-gray-700 mb-2">Price: Rs. {selectedItem.price}</p>
                        <p className="text-gray-600 text-lg mb-6">{selectedItem.description}</p>
                        <p className="text-sm text-gray-600 mb-6">We accept payments via <span className="font-bold">Khalti, eSewa, and more.</span></p>
                        <div className="flex gap-4">
                            <button onClick={openMapNavigation} className="border-2 border-black text-black px-6 py-3 rounded-lg shadow-lg hover:bg-black hover:text-white transition">Visit Store</button>
                            <button onClick={() => setSelectedItem(null)} className="border-2 border-black text-black px-6 py-3 rounded-lg shadow-lg hover:bg-black hover:text-white transition">Back</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Clothes;