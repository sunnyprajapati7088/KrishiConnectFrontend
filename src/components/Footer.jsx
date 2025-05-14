import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          
          {/* Description Section */}
          <div className="flex flex-col space-y-3">
            <h2 className="text-2xl font-bold">Krishi Connect</h2>
            <p className="text-sm">
              Your gateway to better agricultural practices, helping farmers with the latest technology and information.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col space-y-3 md:space-y-1">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-blue-400">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm">Email: <a href="mailto:support@krishiconnect.com" className="hover:text-blue-400">support@krishiconnect.com</a></p>
            <p className="text-sm">Phone: <a href="tel:+911234567890" className="hover:text-blue-400">+91-123-456-7890</a></p>
          </div>
        </div>
        
        {/* Bottom Section (Copyright) */}
        <div className="border-t border-gray-600 pt-4 mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Krishi Connect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
