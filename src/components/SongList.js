import React from 'react';
import Song from './Song';

const SongList = (props) => {
//console.log('songlist songs', props.songs);
  // let someOfTheSongs = props.songs.filter(
  //   song => song.title.includes()
  // )
//if (props.state.filteredSongs === []){
  // const filterSongs = (songs) => {
  //   songs.filter(s => s.include())
  //   return filteredSongs
  // }
  const renderSongs = props.songs.map(s => <Song song={s} key={s.id} playSong={props.playSong} />)


// Let's make it DRY
return (
  <table className="song-list">
    <tbody>
      <tr>
        <th>Title</th>
        <th>Singer</th>
        <th>▶</th>
      </tr>

      {renderSongs}

    </tbody>
  </table>
)


}
export default SongList;


// Process - Correct Process breaking down problem

//  if (props.state.filteredSongs.length === 0){
//     // debugger
//   return (
//     <table className="song-list">
//       <tbody>
//         <tr>
//           <th>Title</th>
//           <th>Singer</th>
//           <th>▶</th>
//         </tr>
//
//         {allTheSongs}
//
//       </tbody>
//     </table>
//   )
// } else if (props.state.filteredSongs.length === 0 && ) {
//
//
// } else {
//   //console.log('you typed some bullshit');
//    // debugger
//   return (
//     <table className="song-list">
//       <tbody>
//         <tr>
//           <th>Title</th>
//           <th>Singer</th>
//           <th>▶</th>
//         </tr>
//
//         {someOfTheSongs}
//
//       </tbody>
//     </table>
//   )
// }


//   let renderSongs = []
//
//   let someOfTheSongs = props.state.filteredSongs.map(song => {
//     return (
//       <Song song={song} key={song.id} playSong={props.playSong}/>
//     )
//   })
//
//   let allTheSongs = props.songs.map(song => {
//     return (
//       <Song song={song} key={song.id} playSong={props.playSong}/>
//     )
//   })
// console.log(props.state.filteredSongs);
//
//   if (props.state.filteredSongs.length === 0){
//     let renderSongs = allTheSongs
//   } else if (props.state.filteredSongs.length === 0 && props.state.searchString !== ''){
//     let renderSongs = allTheSongs
//   } else {
//     let renderSongs = someOfTheSongs
//   }
