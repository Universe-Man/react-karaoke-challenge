import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor(){
    super()
    this.state = {
      currentSong: null
    }
  }
  render() {

// PASS THE SONG UP HERE!!
  const playSong = (song) => {
    console.log('this is the playSong function', song);
    this.setState({
      currentSong: song
    })
  }

    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList songs={songs} playSong={playSong}/>
        </div>
        <KaraokeDisplay song={this.state.currentSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
