import { useState, useEffect } from "react";
// import "./index.css"

interface TimerProps {
  duration: number;
}

const JamboxTimer: React.FC<TimerProps> = ({ duration }) => {
  const [time, setTime] = useState<number>(duration);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearTimeout(timerId); // Cleanup to avoid memory leaks
  }, [time]);

  const getFormattedTime = (
    milliseconds: number
  ): { days: number; hours: number; minutes: number; seconds: number } => {
    const total_seconds = Math.floor(milliseconds / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours = Math.floor(total_minutes / 60);
    const days = Math.floor(total_hours / 24);

    const seconds = total_seconds % 60;
    const minutes = total_minutes % 60;
    const hours = total_hours % 24;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getFormattedTime(time);
  return (
    <div className="font-bold  flex gap-4">
      <div className="w-[62px] h-[62px] rounded-full flex flex-col items-center justify-center bg-gray-100 text-black">
        <span className="text-base font-semibold">{days}</span>
        <p className="text-xs">Days</p>
      </div>
      <div className="w-[62px] h-[62px] rounded-full flex flex-col items-center justify-center bg-gray-100 text-black">
        <span>{hours}</span>
        <p className="text-xs">Hours</p>
      </div>
      <div className="w-[62px] h-[62px] rounded-full flex flex-col items-center justify-center bg-gray-100 text-black">
        <span>{minutes}</span>
        <p className="text-xs">Minutes</p>
      </div>
      <div className="w-[62px] h-[62px] rounded-full flex flex-col items-center justify-center bg-gray-100 text-black">
        <span>{seconds}</span>
        <p className="text-xs">Seconds</p>
      </div>
    </div>
  );
};

export default JamboxTimer;
