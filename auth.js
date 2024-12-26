import React from 'react';
import ReactDOM from 'react-dom';

const Player = ({ videoSrc }) => {
  return (
    <div className="video-player">
      <video controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// Render the Player component into the video-player-container
const videoSrc = 'your-video.mp4'; // Placeholder video source
ReactDOM.render(
  <Player videoSrc={videoSrc} />,
  document.getElementById('video-player-container')
);
