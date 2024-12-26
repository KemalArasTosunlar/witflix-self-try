import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
      <img 
        src="https://images.unsplash.com/photo-1685164804513-e5f9f3b8e503" 
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 p-8 z-20">
        <h1 className="text-5xl font-bold text-white mb-4">Featured Movie</h1>
        <p className="text-lg text-gray-200 max-w-2xl mb-6">
          Experience the latest blockbuster with stunning visuals and an incredible story.
          Watch now in high definition.
        </p>
        <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Hero;