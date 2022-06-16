import React, { useState, useEffect, useRef } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControl from "./PlayerControl";

function Player(props) {
  const audioEl = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurIndex(() => {
        let temp = props.curIndex;
        temp++;
        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurIndex(() => {
        let temp = props.curIndex;
        temp--;
        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      <audio src={props.songs[props.curIndex].src} ref={audioEl}></audio>
      <h4>Playing now</h4>
      {/* Details */}
      <PlayerDetails song={props.songs[props.curIndex]} />
      {/* Controls */}
      <PlayerControl
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>
        <strong>Next up : </strong>
        {props.songs[props.nextIndex].title} by
        {props.songs[props.nextIndex].artist}
      </p>
    </div>
  );
}

export default Player;
