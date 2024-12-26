import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="relative group cursor-pointer">
      <img 
        src={movie.image} 
        alt={movie.title}
        className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
        <button className="bg-red-600 text-white px-4 py-2 rounded">Play</button>
      </div>
    </div>
  );
};

export default MovieCard;