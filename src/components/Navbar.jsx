import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaPlus } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewTicket = () => {
    toast.info('🎫 New ticket creation wizard opened!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const menuItems = [
    { name: 'Home', icon: 'fa-chart-pie' },
    { name: 'FAQ', icon: 'fa-ticket-alt' },
    { name: 'Changelog', icon: 'fa-chart-line' },
    { name: 'Blog', icon: 'fa-users' },
    { name: 'Download', icon: 'fa-cog' },
    { name: 'Contact', icon: 'fa-cog' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl rotate-45 group-hover:rotate-90 transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
                <span className="text-white font-bold text-xl">CS</span>
              </div>
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              SupportZone
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="relative group font-medium text-gray-700 hover:text-purple-600 transition-colors"
              >
                <i className={`fas ${item.icon} mr-2 text-sm`}></i>
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* New Ticket Button */}
          <button
            onClick={handleNewTicket}
            className="hidden lg:flex relative   overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className='mt-1 mr-1'><FaPlus /></span>
            New Ticket
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-12 h-12 flex flex-col justify-center items-center space-y-1.5 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl z-50 hover:shadow-xl transition-all duration-300"
          >
            <span className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-x-0 top-0 transition-all duration-500 transform ${
          isOpen ? 'translate-y-20 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-3xl p-6 mx-4 border border-white/20">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 group transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-purple-600 text-lg">{item.name}</span>
                </a>
              ))}
              <button
                onClick={() => {
                  handleNewTicket();
                  setIsOpen(false);
                }}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-4"
              >
                <i className="fas fa-plus"></i>
                <span className="text-lg">Create New Ticket</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;