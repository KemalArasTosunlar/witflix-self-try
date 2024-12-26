import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black/90 fixed w-full z-50 px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-red-600 text-2xl font-bold">WitFlix</h1>
        <div className="flex gap-6">
          <input 
            type="search" 
            placeholder="Search movies..." 
            className="px-4 py-1 rounded bg-gray-800 text-white"
          />
          <button className="text-white hover:text-red-600">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;