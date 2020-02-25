import React from 'react';
import ReactDOM from 'react-dom';
import { Stepper, DynamicNumber } from '../../src/components';

ReactDOM.render(
  <div>
    <Stepper stepping={100}></Stepper>
    <DynamicNumber speed={'faster'} stepping={10}></DynamicNumber>
    <DynamicNumber speed={'fast'}></DynamicNumber>
    <DynamicNumber speed={'normal'}></DynamicNumber>
    <DynamicNumber speed={'slow'}></DynamicNumber>
    <DynamicNumber speed={'slower'} stepping={10}></DynamicNumber>
  </div>, document.getElementById("root"));