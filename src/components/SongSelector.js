import React from 'react';

const SongSelector = (props) => {
  const options = props.songs.map((song, index) => {
    return <option value={index} key={index}>{song.title.label}</option>;
  });

  return (
    <select multiple size={options.length} name="song-selector" id="song-selector">
      {options}
    </select>
  )
}

export default SongSelector;
