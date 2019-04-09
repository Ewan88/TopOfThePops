import React from 'react';

const SongDetail = (props) => {
  if (!props.song) return null;

  return (
    <div>
      <h3>{props.song["im:name"].label}</h3>
      <p>{props.song["im:artist"].label}</p>
      <p>{props.song["im:collection"]["im:name"].label}</p>
      <img src={props.song["im:image"][0].label} alt="stupid alt"/>
      <audio controls
      src={props.song.link[1].attributes.href} type="audio/mpeg"/>
    </div>
  );
}

export default SongDetail;
