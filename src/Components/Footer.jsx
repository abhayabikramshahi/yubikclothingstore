import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-6 mt-10 ">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 Yubik Clothing. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-gray-600 hover:text-gray-800 mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-gray-600 hover:text-gray-800 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;