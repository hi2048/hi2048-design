import React, { useState, useEffect } from 'react';
import { NORMAL, getSpeed } from './config';
import { random } from 'hi2048-utils';
import './style.css';

export const DynamicNumber = props => {
  const { start = 100, end = 0, stepping = 1, isRandom = true, speed = NORMAL } = props;
  const [count, setCount] = useState(start);

  const dynamic = () => {
    let dynamicStepping = stepping;
    let distance = end - start;
    const direction = distance < 0?-1 : 1;

    const timer = setInterval(() => {
      if(isRandom) {
        dynamicStepping = random(stepping);
      }

      if(Math.abs(distance) < dynamicStepping) {
        distance = 0;
        setCount(end);
        return clearInterval(timer);
      }

      distance -= dynamicStepping * direction;
      setCount(count => count + dynamicStepping * direction);
    }, getSpeed(speed))
  }
  useEffect(dynamic, []);

  return (
    <div className="hi2048 dynamic-number-container">
      <span className="counter">{ count }</span>
    </div>
  );
};