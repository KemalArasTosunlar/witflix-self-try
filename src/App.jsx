import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <MovieList title="Trending Now" />
      <MovieList title="Popular on WitFlix" />
      <MovieList title="New Releases" />
    </div>
  );
}

export default App;