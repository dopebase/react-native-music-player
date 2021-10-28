import {secondsToMinutes} from 'date-fns';

export const secsToTimestamp = seconds => {
    console.log(seconds);
  const mins = secondsToMinutes(seconds);
  const secs = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  return `${mins}:${secs}`;
};
