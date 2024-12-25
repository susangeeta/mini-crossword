/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FaPen, FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

const Header = ({ setIsPenActive, isPenActive, setGrid }) => {
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleClear = () => {
    setGrid(
      Array(5)
        .fill()
        .map(() => Array(5).fill(""))
    );
    setTime(0);
    setIsTimerRunning(true);
  };

  // Timer functionality
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning]);

  return (
    <section className="main-container shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white">
      <div className="py-4 flex w-full justify-between">
        <buttonn className="text-2xl text-purple-600">
          <IoSettingsSharp />
        </buttonn>

        <div className="flex items-center gap-4">
          <div className="font-semibold text-lg">{formatTime(time)}</div>
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className="text-[#b7b7b7]"
          >
            {isTimerRunning ? <IoMdPause /> : <FaPlay />}
          </button>
        </div>

        <div className="flex items-center gap-8">
          <button onClick={handleClear} className="">
            Clear
          </button>
          <button className="">Reset</button>
          <button
            onClick={() => setIsPenActive(!isPenActive)}
            className="text-xl text-purple-600"
          >
            <FaPen />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
