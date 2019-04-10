import React from 'react';

const SongDetail = (props) => {
  if (!props.song) return null;

  return (
    <div id="song-detail">
      <div className="left">
        <img src={props.song["im:image"][2].label} alt="album cover"/>
        <div className="right">
          <h3>{props.song["im:name"].label}</h3>
          <p>{props.song["im:artist"].label}</p>
          <p>{props.song["im:collection"]["im:name"].label}</p>
          <audio controls
          src={props.song.link[1].attributes.href} type="audio/mpeg"/>
        </div>
      </div>
    </div>
  );
}

export default SongDetail;
