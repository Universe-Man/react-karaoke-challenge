import React, { Component } from 'react';

class Filter extends Component {
  constructor(){
    super()
    this.state = {
      // hi: null
    }
  }
  updateText = (event) => {
    console.log(event.target.value)
    // this.setState({
    //   hi: updateText
    // })
  }
  render() {


    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" onChange={this.updateText}/>
      </div>
    );
  }
}

export default Filter;
