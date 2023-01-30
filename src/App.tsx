import React from 'react';
import './App.css';

function App() {
  const embedId = "6fNmnlBC1LQ";
  const allow = "accelerometer; "
    + "autoplay; "
    + "clipboard-write;" 
    + "encrypted-media; "
    + "gyroscope; " 
    + "picture-in-picture";
  return (
    <div className="App">
      <div className="video-container">
        <iframe
          className="video"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow={allow}
          allowFullScreen 
          title="EWLC Video"
        />
      </div>
    </div>
  );
}

export default App;
