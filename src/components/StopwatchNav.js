import React, { useContext, useState } from 'react';
import { StopwatchContext } from './StopwatchContext';
import { createStopwatch } from '../observables'
import { Button, makeStyles } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export const StopwatchNav = () => {
  const { seconds, setSeconds, setMinutes, setHours } = useContext(StopwatchContext);
  const [interval, setNewInterval] = useState();
  const [isStart, setStart] = useState(false);
  const classes = useStyles()
  let clicks = 0;

  const customDoubleClick = () => {
    clicks++;

    setTimeout(() => clicks = 0, 300);

    if (clicks === 2) {
      clearInterval(interval);
    }
  };

  const stopStopwatch = () => {
    clearInterval(interval);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <>
      {isStart ? (
        <Button
          variant="contained"
          color="secondary"
          className={classes.margin}
          onClick={() => {
            setStart(false);
            stopStopwatch();
          }}
        >
          Stop
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          className={classes.margin}
          onClick={() => {
            setStart(true);
            createStopwatch(setNewInterval, seconds, setMinutes, setHours)
              .subscribe(val => {setSeconds(val)});
          }}
        >
          Start
        </Button>
      )}
      {/* <button onClick={() => {
        createStopwatch(setNewInterval, seconds, setMinutes, setHours)
          .subscribe(val => {setSeconds(val)});
        }}
      >
        start
      </button> */}

      {/* <button onClick={() => {
          stopStopwatch();
        }}
      >
        stop
      </button> */}

      <Button
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={() => customDoubleClick()}
      >
        Wait
      </Button>

      <Button
        variant="contained"
        color="secondary"
        className={classes.margin}
        startIcon={<Delete />}
        onClick={() => {
          stopStopwatch();
          createStopwatch(setNewInterval, 0)
            .subscribe(val => setSeconds(val));
        }}
      >
        Reset
      </Button>
    </>
  );
}
