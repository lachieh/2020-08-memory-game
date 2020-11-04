import React from 'react'

import './MemoryCard.css';
import logo from '../logo-wrench-white.png';

function Card(props) {
  let innerClass = "MemoryCard__inner";
  if (props.isFlipped) {
    innerClass += ' flipped';
  }
  return (
    <div className="MemoryCard" onClick={props.pickCard}>
      <div className={innerClass}>
        <div className="MemoryCard__back">
          <img src={logo} alt="" />
        </div>
        <div className="MemoryCard__front">
          {props.symbol}
        </div>
      </div>
    </div>
  )
}

export default Card;