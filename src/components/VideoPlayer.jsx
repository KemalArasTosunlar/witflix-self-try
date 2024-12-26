import React from 'react';

const VideoPlayer = ({ videoUrl, title, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl">{title}</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-red-500"
          >
            Close
          </button>
        </div>
        <video 
          controls 
          className="w-full rounded-lg shadow-lg"
          autoPlay
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;