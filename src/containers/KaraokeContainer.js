import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor(){
    super()
    this.state = {
      songs: songs,
      filteredSongs: [],
      currentSong: null,
      searchTerm: ''
    }
  }

 filteredListOfSongs = () => {
   return this.state.songs.filter(s => s.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
 }

  updateText = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }



  render() {
// PASS THE SONG UP HERE!!
// (this function doesn't need "this." infront of it as the prop below because it's defined inside the render())
  const playSong = (song) => {
    //console.log('this is the playSong function', song);
    this.setState({
      currentSong: song
    })
  }

  // whichSongs = () => {
  //   if () return songs
  //   else return filteredSongs
  // }

  // songs={this.whichSongs()}

    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter updateText={this.updateText}/>
          <SongList songs={this.filteredListOfSongs()} playSong={playSong}  state={this.state} />
        </div>
        <KaraokeDisplay song={this.state.currentSong}/>
      </div>
    );
  }
}

// THIS WAS INSIDE THE SONGLIST COMPONENT BUT I HAD TO REMOVE IT FOR A STATE STRATEGY


export default KaraokeContainer;
