import React from 'react';
import Song from './Song';

const SongList = (props) => {

  

  let allTheSongs = props.songs.map(song => {
    return (
      <Song song={song} key={song.id} playSong={props.playSong}/>
    )
  })
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {allTheSongs}

      </tbody>
    </table>
  )
}

export default SongList;
