/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import { Clock, PauseCircle, PlayCircle, Trophy } from "lucide-react";
import { useEffect } from "react";
import { useTime } from "../../contexts/TimeContext";
import { Modal } from "../common";

const PauseModal = ({ isGamePaused, setIsGamePaused }) => {
  const { startTimer, isRunning } = useTime();

  /**
   * Logic to handle space bar key down event
   */
  useEffect(() => {
    const handleSpaceBar = (e) => {
      if (e.code === "Space" && isGamePaused) {
        e.preventDefault();
        startTimer();
        setIsGamePaused(false);
      }
    };

    document.addEventListener("keydown", handleSpaceBar);
    return () => document.removeEventListener("keydown", handleSpaceBar);
  }, [isGamePaused]);

  return (
    <Modal
      isOpen={!isRunning && isGamePaused}
      onClose={() => {
        startTimer();
        setIsGamePaused(false);
      }}
    >
      <div className=" w-[20rem] h-[25rem]   md:w-[40rem]  md:h-[30rem] bg-white rounded-md flex items-center justify-center flex-col relative">
        <div className="absolute top-6 flex justify-between w-full px-8">
          <Clock className="w-6 h-6 text-gray-400" />
          <PauseCircle className="w-8 h-8 text-primary" />
          <Trophy className="w-6 h-6 text-gray-400" />
        </div>

        <div className="flex flex-col gap-6  md:gap-10 justify-center items-center">
          <div className="bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            Game Paused
          </div>

          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className=" text-xl md:text-5xl font-bold text-center">
              Your Game Is Paused
            </h1>
            <p className=" text-xl md:text-3xl font-medium text-center text-gray-600">
              Ready to Play
            </p>
          </div>

          <button
            onClick={() => {
              startTimer();
              setIsGamePaused(false);
            }}
            className=" px-7 md:px-12 py-3  md:py-4 text-lg w-fit bg-primary text-white rounded-full flex items-center gap-2"
          >
            <PlayCircle className="w-5 h-5" />
            Continue
          </button>

          <div className="flex items-center gap-1.5 font-semibold text-lg">
            <p>{dayjs(new Date()).format("dddd")}, </p>
            <p>{dayjs(new Date()).format("MMMM")}</p>
            <p>{dayjs(new Date()).format("DD")},</p>
            <p>{dayjs(new Date()).format("YYYY")}</p>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="absolute bottom-6 text-sm text-gray-400">
          Press spacebar to resume
        </p>
      </div>
    </Modal>
  );
};

export default PauseModal;
