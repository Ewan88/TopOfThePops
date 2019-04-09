import React from 'react';
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      console.log(data);
      this.setState({songs: data.feed.entry});
    });

    request.send();
  }

  handleSongSelected(index) {
    const selectedSong = this.state.songs[index];
    this.setState({currentSong: selectedSong})
  }

  render(){
    return (
      <div id="song-container">
        <h2>Top 20 Songs</h2>
        <SongSelector songs={this.state.songs}
        onSongSelected={this.handleSongSelected}/>
        <SongDetail song={this.state.currentSong}/>
      </div>
    );
  }
}

export default SongContainer;
