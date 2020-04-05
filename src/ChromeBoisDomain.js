import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let x = event.clientX
    let y = event.clientY

    drawChromeBoiAtCoords(x, y)
  }

  handleClick = () => {
    toggleCycling()
  }

  handleKeys = event => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onKeyPress={event => this.handleKeys(event)}
        onClick={this.handleClick}
        onMouseMove={event => this.handleMouseMove(event)}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
