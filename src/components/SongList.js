import React from 'react';
import Song from './Song.js'

const SongList = (props) => {
  let eachSong = props.songs.map(song => {
    return (
      <Song title={song.title} singer={song.singer} key={song.id}
      playSong={props.playSong}/>
    )
  })
  console.log('look', props.songs);
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {eachSong}

      </tbody>
    </table>
  )
}

export default SongList;
