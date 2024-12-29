/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import confetti from "canvas-confetti";
import { ArrowLeft, Clock, Star, Trophy } from "lucide-react";
import { useEffect } from "react";
import { useTime } from "../../contexts/TimeContext";
import generateGrid from "../../utils";
import { Modal } from "../common";

const WinModal = ({ isComplete, setIsComplete, setGrid }) => {
  const { time, resetTimer, formatTime, startTimer } = useTime();

  useEffect(() => {
    if (isComplete) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [isComplete]);

  /**
   * Logic for handle reset puzzel
   */
  const handleClear = () => {
    setGrid(generateGrid(5));
    resetTimer();
    setIsComplete(false);
    startTimer();
  };

  /**
   * Logic for handle space bar key click
   */
  useEffect(() => {
    const handleSpaceBar = (e) => {
      if (e.code === "Space" && isComplete) {
        e.preventDefault();
        handleClear();
      }
    };

    document.addEventListener("keydown", handleSpaceBar);
    return () => document.removeEventListener("keydown", handleSpaceBar);
  }, [isComplete]);

  return (
    <Modal isOpen={isComplete} onClose={handleClear}>
      <div className="p-6 text-center bg-white w-[20rem] h-[25rem]   md:w-[40rem] md:h-[28rem] flex items-center justify-center flex-col rounded-lg relative">
        <div className="absolute top-6 flex justify-between w-full px-8">
          <Clock className="w-6 h-6 text-gray-400" />
          <Trophy className=" h-5 w-5 md:w-8  md:h-8 text-yellow-500" />
          <Star className="w-6 h-6 text-gray-400" />
        </div>

        <div className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          Puzzle Complete!
        </div>

        <h2 className=" text-xl md:text-4xl font-bold mb-2">
          Congratulations! 🎉
        </h2>
        <p className="mb-4 text-base md:text-lg text-gray-600">
          {`You've successfully completed the puzzle in ${time} seconds!`}
        </p>

        <div className="flex gap-6 mb-6">
          <div className="px-6 py-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Time</p>
            <p className="text-xl font-bold text-primary">{formatTime()}s</p>
          </div>
          <div className="px-6 py-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Score</p>
            <p className="text-xl font-bold text-primary">100%</p>
          </div>
        </div>

        <button
          onClick={handleClear}
          className=" px-5 md:px-8 py-2  md:py-3 text-white bg-primary rounded-full text-lg flex items-center gap-2 hover:bg-primary/90 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Puzzle
        </button>

        <p className="absolute bottom-6 text-sm text-gray-400">
          Press spacebar to continue
        </p>
      </div>
    </Modal>
  );
};

export default WinModal;
