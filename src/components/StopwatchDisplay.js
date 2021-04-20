import React, { useContext } from 'react';
import { StopwatchContext } from './StopwatchContext';

export const StopwatchDisplay = () => {
  const { seconds, minutes, hours } = useContext(StopwatchContext);

  return (
    <div className="display">
      <div className="hours">{hours < 10 ? `0${hours}` : hours}</div>
      <div>:</div>
      <div className="minutes">{minutes < 10 ? `0${minutes}` : minutes}</div>
      <div>:</div>
      <div className="seconds">{seconds < 10 ? `0${seconds}`: seconds}</div>
    </div>
  );
};
