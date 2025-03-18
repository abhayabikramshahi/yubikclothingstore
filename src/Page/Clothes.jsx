import React, { useState } from "react";
import cloth1 from '../upload/1.jpg';
import cloth2 from '../upload/2.jpg';
import cloth3 from '../upload/3.jpg';
import cloth4 from '../upload/4.jpg';
import cloth5 from '../upload/5.jpg';
import cloth6 from '../upload/6.jpg';

function Clothes() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Our Latest Collection</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <img src={cloth1} alt="Clothing 1" className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer" onClick={() => openModal(cloth1)} />
                <img src={cloth2} alt="Clothing 2" className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer" onClick={() => openModal(cloth2)} />
                <img src={cloth3} alt="Clothing 3" className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer" onClick={() => openModal(cloth3)} />
                <img src={cloth4} alt="Clothing 4" className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer" onClick={() => openModal(cloth4)} />
                <img src={cloth5} alt="Clothing 5" className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer" onClick={() => openModal(cloth5)} />
                <img src={cloth6} alt="Clothing 6" className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer" onClick={() => openModal(cloth6)} />
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative">
                        <img src={currentImage} alt="Full Screen View" className="max-w-full max-h-screen object-contain rounded-lg" />
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-3xl font-bold bg-red-500 rounded-full p-2"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Clothes;
