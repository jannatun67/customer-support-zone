import React from 'react';
import frame1 from "../assets/frame1.png"
import frame2 from "../assets/frame2.png"

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden pt-36">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div> */}
      
      {/* Animated Circles */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div> */}
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            // style={{
            //   left: `${Math.random() * 100}%`,
            //   top: `${Math.random() * 100}%`,
            //   animationDelay: `${Math.random() * 5}s`,
            //   animationDuration: `${3 + Math.random() * 5}s`
            // }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
       

        {/* Statistics Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {/* In Progress Card */}
       <div className="group relative w-full md:w-96 transform hover:scale-110 transition-all duration-500">
  
  {/* Background Image */}
  <div
    className="absolute inset-0 rounded-2xl bg-cover bg-center transition-opacity duration-500 opacity-80 group-hover:opacity-100"
    style={{ backgroundImage: `url(${frame1 })` }}
  >
    {/* Dark overlay for better text visibility */}
    {/* <div className="absolute inset-0 bg-black/50 rounded-2xl"></div> */}
  </div>

  {/* Glass Content */}
  <div className="relative backdrop-blur-xl rounded-2xl p-8 border border-white/20 overflow-hidden">
    
    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

    <div className="relative">
      <i className="fas fa-spinner text-4xl text-yellow-300 mb-4"></i>

      <h3 className="text-2xl font-bold text-white mb-2">
        In Progress
      </h3>

      <div className="text-5xl font-black text-white">
        {inProgress}
      </div>

      <p className="text-white/80 mt-2">
        Active tickets
      </p>
    </div>

  </div>
</div>

          {/* Resolved Card */}
         <div className="group relative w-full md:w-96 transform hover:scale-110 transition-all duration-500">
  
  {/* Background Image */}
  <div
    className="absolute inset-0 rounded-2xl bg-cover bg-center transition-opacity duration-500 opacity-80 group-hover:opacity-100"
    style={{ backgroundImage: `url(${frame2})` }}
  >
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
  </div>

  {/* Glass Content */}
  <div className="relative backdrop-blur-xl rounded-2xl p-8 border border-white/20 overflow-hidden">
    
    <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

    <div className="relative">
      <i className="fas fa-check-circle text-4xl text-green-300 mb-4"></i>

      <h3 className="text-2xl font-bold text-white mb-2">
        Resolved
      </h3>

      <div className="text-5xl font-black text-white">
        {resolved}
      </div>

      <p className="text-white/80 mt-2">
        Completed tickets
      </p>
    </div>

  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Banner;