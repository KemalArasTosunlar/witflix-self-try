import React from 'react';
import MovieCard from './MovieCard';

const MovieSlider = ({ title, movies, onPlayMovie }) => {
  const scrollLeft = () => {
    const slider = document.getElementById(`slider-${title}`);
    slider.scrollLeft -= slider.offsetWidth;
  };

  const scrollRight = () => {
    const slider = document.getElementById(`slider-${title}`);
    slider.scrollLeft += slider.offsetWidth;
  };

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-r"
        >
          ◀
        </button>
        <div
          id={`slider-${title}`}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-[250px]">
              <MovieCard movie={movie} onPlay={onPlayMovie} />
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-l"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default MovieSlider;