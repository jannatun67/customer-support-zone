import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-pink-600/20 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-32 h-32 border-4 border-purple-200 rounded-full animate-spin-slow">
          <div className="absolute top-0 left-0 w-32 h-32 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Inner Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fas fa-ticket-alt text-white text-2xl animate-bounce"></i>
            </div>
          </div>
        </div>

        {/* Orbiting Dots */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-purple-600 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 120}deg) translateX(60px)`,
              animation: `orbit 2s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          ></div>
        ))}

        {/* Loading Text */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <div className="flex space-x-1">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse">
              Loading
            </span>
            <span className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></span>
              ))}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">Fetching customer tickets...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;