import "react-clock/dist/Clock.css";
import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import moment from 'moment-timezone';

interface AnalogClockProps {
  timeZone: string;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ timeZone }) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment.tz(timeZone).toDate());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);



  return (
    <div className="flex items-center justify-center p-4 w-full h-[252px]">
      <div>
        <Clock
          renderNumbers={true}
          renderMinuteMarks={true}
          value={currentTime}
        />
        <p className="text-lg">{timeZone}</p>
      </div>
    </div>
  );
};

export default AnalogClock;
