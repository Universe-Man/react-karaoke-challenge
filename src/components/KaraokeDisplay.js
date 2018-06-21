import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  console.log('this is the song', props.song);
  return (
    <div className="karaoke-display">
      <h2>{props.song ? props.song.title : null}</h2>
      <Lyrics lyrics={props.song ? props.song.lyrics : null} />
    </div>
  )
}

export default KaraokeDisplay;
