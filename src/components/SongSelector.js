import React from 'react';

const SongSelector = (props) => {
  const options = props.songs.map((song, index) => {
    return <option value={index} key={index}>{index + 1}: {song.title.label}</option>;
  });

  function handleChange(event) {
    props.onSongSelected(event.target.value);
  }

  return (
    <select multiple size={options.length} name="song-selector"
     id="song-selector" onChange={handleChange}>
      {options}
    </select>
  )
}

export default SongSelector;
