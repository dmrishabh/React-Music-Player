import React, { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3",
    },
  ]);

  const [curIndex, setCurIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(curIndex + 1);
  useEffect(() => {
    setNextIndex(() => {
      if (curIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return curIndex + 1;
      }
    });
  }, [curIndex]);

  // !-----------returning---------------------
  return (
    <div className="App">
      <Player
        curIndex={curIndex}
        setCurIndex={setCurIndex}
        nextIndex={nextIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
