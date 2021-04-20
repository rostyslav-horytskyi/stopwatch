import React, { useState } from 'react';

const contextProps = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  setSeconds: () => {},
  setMinutes: () => {},
  setHours: () => {},
}

export const StopwatchContext = React.createContext(contextProps);

export const StopwatchProvider =  ({children}) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const contextValue = {
    seconds,
    minutes,
    hours,
    setSeconds,
    setMinutes,
    setHours,
  };

  return (
    <StopwatchContext.Provider value={contextValue}>
      {children}
    </StopwatchContext.Provider>
  );
};