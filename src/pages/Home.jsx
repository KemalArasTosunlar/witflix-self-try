import React, { useState } from 'react';
import Hero from '../components/Hero';
import MovieSlider from '../components/MovieSlider';
import VideoPlayer from '../components/VideoPlayer';

// Temporary mock data - replace with actual API calls
const mockFeatured = {
  id: 'featured-1',
  title: 'The Latest Blockbuster',
  description: 'An exciting journey into the world of entertainment. Watch now!',
  trailerUrl: '/path/to/trailer.mp4',
  videoUrl: '/path/to/full-movie.mp4',
  cast: ['Famous Actor', 'Famous Actress'],
  genres: ['Action', 'Drama'],
};

const mockMovies = {
  popular: [
    { id: 1, title: 'Movie 1', thumbnail: '/path/to/thumbnail1.jpg', videoUrl: '/path/to/movie1.mp4' },
    { id: 2, title: 'Movie 2', thumbnail: '/path/to/thumbnail2.jpg', videoUrl: '/path/to/movie2.mp4' },
    // Add more movies...
  ],
  recommended: [
    { id: 3, title: 'Movie 3', thumbnail: '/path/to/thumbnail3.jpg', videoUrl: '/path/to/movie3.mp4' },
    { id: 4, title: 'Movie 4', thumbnail: '/path/to/thumbnail4.jpg', videoUrl: '/path/to/movie4.mp4' },
    // Add more movies...
  ],
};

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handlePlayMovie = (movie) => {
    setCurrentVideo(movie);
  };

  return (
    <div className="min-h-screen bg-black">
      <Hero featured={mockFeatured} onPlay={handlePlayMovie} />
      
      <main className="container mx-auto px-4">
        <MovieSlider 
          title="Popular Movies" 
          movies={mockMovies.popular}
          onPlayMovie={handlePlayMovie}
        />
        <MovieSlider 
          title="Recommended For You" 
          movies={mockMovies.recommended}
          onPlayMovie={handlePlayMovie}
        />
      </main>

      {currentVideo && (
        <VideoPlayer
          videoUrl={currentVideo.videoUrl}
          title={currentVideo.title}
          onClose={() => setCurrentVideo(null)}
        />
      )}
    </div>
  );
};

export default Home;