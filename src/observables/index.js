import { Observable } from 'rxjs';

export const createStopwatch = (setInter, sec, setMinutes, setHours) => {
  sec++;
  let min = 0;
  let hour = 0;

  return new Observable(observer => {
    const interval = setInterval(() => {
      if (sec <= 60) {
        observer.next(sec++);
      } 
      
      if (sec === 61) {
        observer.next(0);
        min++
        sec = 1;
        setMinutes(min)
        console.log(min);
      }

      if (min === 60) {
        min = 0
        hour++;
        setMinutes(min);
        setHours(hour);
      }

      if (hour === 24) {
        hour = 0;
        setHours(hour);
      }

    }, 1000);

    if (setInter) {
      setInter(interval);
    }
  });
};
