import React from 'react';

class Song extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      playing: false
    }
  }
  render(){
  return (
    <tr className="song">
      <td>{this.props.title}</td>
      <td>{this.props.singer}</td>
      <td><button id={this.props.id}
      onClick={(e) => {
        this.props.playSong(e, this.props.id)
      }}>Play</button></td>
    </tr>
  )}
}

export default Song;
