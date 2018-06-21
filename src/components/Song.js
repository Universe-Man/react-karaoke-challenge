import React from 'react';

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button onClick={ () => {props.playSong(props.song)}}>Play</button></td>
    </tr>
  )
}
// ^^ SEE THAT SHIT UP THERE? WHEN YOU CREATE AN ANONOMOUS FUNCTION TO INVOKE AN ONCLICK, YOU CAN LITERALLY PASS WHATEVER THE FUCK YOU WANT!!
// SO PASS THAT WHOLE FUCKING OBJECT DUMMY (SONG) ^^
export default Song;
