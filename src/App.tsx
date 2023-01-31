import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  const embedId = "6fNmnlBC1LQ";
  const allow = "accelerometer; "
    + "autoplay; "
    + "clipboard-write;" 
    + "encrypted-media; "
    + "gyroscope; " 
    + "picture-in-picture";
  const homeImage = "https://www.eastwoodleadershipcamp.org/uploads/b/f99ed5cc0904b932b1989dfa8dc7e24ece9d4595bd2685b5b1d802b032bd5a58/IMG_20210714_172402950_HDR_1647317048.jpg?width=2000";
  return (
    <div className="App">
      <Navbar />
      <div className="video-container">
        <iframe
          className="video"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow={allow}
          allowFullScreen 
          title="EWLC Video"
        />
      </div>
      <img src={homeImage} alt="home image" />
    </div>
  );
}

export default App;
