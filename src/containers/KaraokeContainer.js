import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor(){
    super()
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    fetch('https://demo.lovescomputers.com/songs')
      .then(res=>res.json())
      .then(json=>this.setState({
        songs: json
      }))
  }

  playSong(e, id){
    
    console.log('im here', this.props.song);
    // this.setState({
    //   playing: true
    // })
    // pasteSong()
  }

  render() {

    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList songs={this.state.songs} playSong={this.playSong}/>
        </div>
        {/*}<KaraokeDisplay title={} lyrics={}/>*/}
      </div>
    );
  }
}

export default KaraokeContainer;
