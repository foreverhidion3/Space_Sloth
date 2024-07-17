import React from 'react';
import ReactPlayer from 'react-player';
import './AudioPlayer.css'; // Import CSS file for styling

const AudioPlayer = ({ url }) => {
  return (
    <div className="audio-player-container">
      <div className="audio-player">
        <ReactPlayer
          url={url}
          playing={true}  // Ensure 'playing' is set to true for autoplay
          controls={true} // Ensure 'controls' are shown
          width="100%"
          height="50px"
          onPlay={() => console.log('onPlay')}   // Optional: Log play event
          onPause={() => console.log('onPause')} // Optional: Log pause event
          onEnded={() => console.log('onEnded')} // Optional: Log end event
        />
      </div>
    </div>
  );
};

export default AudioPlayer;



