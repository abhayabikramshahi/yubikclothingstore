import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-10">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-left">Contact Us</h1>
        <p className="text-gray-600 mb-4 text-left">
          We are always here to assist with any queries regarding Yubik Clothing Store. Feel free to reach out to us.
        </p>

        {/* General Query or Collaboration */}
        <h2 className="text-2xl font-semibold mt-4 mb-2 text-left text-gray-800">General Queries or Collaboration</h2>
        <p className="text-gray-600 mb-2 text-left">
          For general queries or collaboration requests, please reach out to us using the information below:
        </p>
        <p className="text-red-500 text-left">Email: info@yubikclothing.com</p>

        {/* Community Feedback */}
        <h2 className="text-2xl font-semibold mt-4 mb-2 text-left text-gray-800">Community Feedback</h2>
        <p className="text-gray-600 text-left">
          We value your suggestions and feedback to improve our services. If you have any ideas on how we can enhance our store or our online presence, feel free to{' '}
          <a href="#" className="text-red-500 underline">
            share your thoughts with us
          </a>{' '}
          through the link above.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
