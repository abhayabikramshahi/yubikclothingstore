import React from 'react';

const ContactUs = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-gray-600 mb-4">
                We are always ready to help with any queries regarding the community. Feel free to contact us.
            </p>
            
            <h2 className="text-2xl font-semibold mt-4 mb-2">General query or collaboration</h2>
            <p className="text-gray-600 mb-2">
                Please contact us for the general queries or collaboration using the below information:
            </p>
            <p className="text-red-500">Email: info@askbuddie.com</p>
            
            <h2 className="text-2xl font-semibold mt-4 mb-2">Community feedback</h2>
            <p className="text-gray-600">
                If you have any suggestions or ways to improve our community that includes our Facebook group 
                community or any online presence feel free to{' '}
                <a href="#" className="text-red-500 underline">create a new post in our community</a> 
                as we are always open for feedbacks.
            </p>
        </div>
    );
};

export default ContactUs;