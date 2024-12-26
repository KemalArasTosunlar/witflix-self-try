import React from 'react';
import MovieCard from './MovieCard';

const movies = [
  {
    id: 1,
    title: 'Movie 1',
    image: 'https://images.unsplash.com/photo-1685164804513-e5f9f3b8e503',
  },
  {
    id: 2,
    title: 'Movie 2',
    image: 'https://images.unsplash.com/photo-1685164804513-e5f9f3b8e503',
  },
  {
    id: 3,
    title: 'Movie 3',
    image: 'https://images.unsplash.com/photo-1685164804513-e5f9f3b8e503',
  },
];

const MovieList = ({ title }) => {
  return (
    <div className="px-8 my-8">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;