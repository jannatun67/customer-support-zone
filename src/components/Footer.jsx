import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-14 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-800 pb-10">
          
          {/* Left Content */}
          <div className="md:col-span-2">
            <h2 className="text-white text-xl font-semibold mb-4">
              CS — Ticket System
            </h2>
            <p className="text-sm leading-6 text-gray-500 max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Mission</li>
              <li className="hover:text-white cursor-pointer">Contact Sales</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                Products & Services
              </li>
              <li className="hover:text-white cursor-pointer">
                Customer Stories
              </li>
              <li className="hover:text-white cursor-pointer">
                Download Apps
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">Join Us</li>
            </ul>
          </div>
        </div>

        {/* Social + Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6">
          
          {/* Social Links */}
          <div className="flex gap-5 text-lg">
            <FaTimes className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <div className="flex items-center gap-2 text-sm">
              <FaEnvelope />
              <span>support@cst.com</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;