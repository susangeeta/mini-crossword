/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FaClock } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { PuzzleSetting } from ".";
import { formatTime } from "../../utils";

const Header = ({ setIsPenActive, isPenActive, setGrid }) => {
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [modal, setModal] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const handleClear = () => {
    setGrid(
      Array(5)
        .fill()
        .map(() => Array(5).fill(""))
    );
    setTime(0);
    setIsTimerRunning(true);
  };

  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning]);

  return (
    <>
      <section className="bg-[#f5f5f5]">
        <div className="py-4 px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModal(true)}
              className="text-2xl text-primary border"
            >
              <IoSettingsSharp />
            </button>

            <div
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="font-semibold text-lg cursor-pointer flex items-center gap-2"
            >
              {isTimerRunning ? (
                <>{formatTime(time)}</>
              ) : (
                <button className="text-primary text-2xl">
                  <FaClock />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-primary text-white rounded-md"
            >
              Reveal
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Reset
            </button>
          </div>
        </div>
      </section>
      {modal && <PuzzleSetting setModal={setModal} />}
    </>
  );
};

export default Header;
