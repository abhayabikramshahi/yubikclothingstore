import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-start py-16 px-10">
      <header className="text-left mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About Yubik Clothing</h1>
        <p className="text-xl text-gray-600 mt-4">Stylish and Sustainable Fashion from Jhapa, Nepal</p>
      </header>

      <section className="max-w-5xl mx-auto px-0">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row items-start mb-8">
            <img 
              src="https://via.placeholder.com/500" 
              alt="Yubik Clothing Store" 
              className="w-full lg:w-1/2 rounded-lg shadow-lg mb-4 lg:mb-0"
            />
            <div className="lg:ml-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Yubik Clothing Store, based in Jhapa, Nepal, was founded with a mission to bring sustainable, stylish,
                and high-quality clothing to the market. We focus on combining modern fashion trends with Nepali craftsmanship,
                ensuring that each product tells a story of culture and artistry.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision at Yubik Clothing is to provide clothes that allow individuals to express their true selves.
                We believe in sustainable fashion that is both stylish and ethically produced, making sure every purchase
                not only makes you look good but feel good too.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Yubik Clothing is dedicated to creating timeless pieces that combine comfort, style, and sustainability.
            With our passion for fashion and the environment, we ensure that every item is made with the highest quality materials.
          </p>
          
          {/* Warning Terms Section with Red Background */}
          <div className="bg-red-100 p-6 mt-10 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Important Payment Information</h3>
            <p className="text-lg text-gray-700">
              Please note that we do not support direct payments through our website. However, we offer the following alternative payment methods:
            </p>
            <ul className="list-disc pl-6 mt-4 text-lg text-gray-700">
              <li>Khalti</li>
              <li>Esewa</li>
              <li>Online Banking</li>
            </ul>
            <p className="mt-4 text-gray-600">
              If you have any questions about the payment process, please feel free to contact our support team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
