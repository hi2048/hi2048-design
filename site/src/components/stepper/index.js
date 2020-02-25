import React, { useState } from 'react';
import './style.css';

export const Stepper = props => {
  const { initCount = 0, stepping = 1 } = props;
  const [count, setCount] = useState(initCount);

  return (
    <div className="hi2048 stepper-container">
      <span className="counter">{ count }</span>
      <div className="controller">
        <button onClick={ e => setCount((count - stepping) < 0?0 : (count - stepping)) }> - </button>
        <button onClick={ e => setCount(count + stepping) }> + </button>
      </div>
    </div>
  )
};