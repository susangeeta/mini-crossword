/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import { PlayCircle, Puzzle, Timer, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { useTime } from "../../contexts/TimeContext";
import { Modal } from "../common";

const WelcomModal = () => {
  const { startTimer } = useTime();
  const [isWelcomModalOpen, setIsWelcomModalOpen] = useState(false);

  /**
   * Logic for open the modal first time when page reload
   */
  useEffect(() => {
    setIsWelcomModalOpen(true);
  }, []);

  /**
   * Logic for spacebar start
   */
  useEffect(() => {
    const handleSpaceBar = (e) => {
      if (e.code === "Space" && isWelcomModalOpen) {
        e.preventDefault();
        setIsWelcomModalOpen(false);
        startTimer();
      }
    };

    document.addEventListener("keydown", handleSpaceBar);
    return () => document.removeEventListener("keydown", handleSpaceBar);
  }, [isWelcomModalOpen]);

  return (
    <Modal
      isOpen={isWelcomModalOpen}
      onClose={() => {
        setIsWelcomModalOpen(false);
        startTimer();
      }}
    >
      <div className=" w-[20rem] h-[25rem] md:w-[40rem] md:h-[30rem] bg-white rounded-md flex items-center justify-center flex-col relative">
        <div className="absolute top-6 flex justify-between w-full px-8">
          <Timer className="w-6 h-6 text-gray-400" />
          <Puzzle className="w-8 h-8 text-primary" />
          <Trophy className="w-6 h-6 text-gray-400" />
        </div>

        <div className="flex flex-col gap-5 md:gap-10 justify-center items-center">
          <div className="bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            {`Today's Puzzle`}
          </div>

          <div className="flex flex-col gap-1  md:gap-3">
            <h1 className=" text-xl md:text-5xl font-bold text-center">
              The Mini Crossword
            </h1>
            <p className=" text-xl md:text-3xl font-medium text-center text-gray-600">
              Ready to start solving?
            </p>
          </div>

          <button
            onClick={() => {
              setIsWelcomModalOpen(false);
              startTimer();
            }}
            className=" px-6 md:px-12 py-3 md:py-4 text-base md:text-lg w-fit bg-primary text-white rounded-full flex items-center gap-2"
          >
            <PlayCircle className="w-5 h-5" />
            Play now
          </button>

          <div className="flex items-center gap-1.5 font-semibold text-base md:text-lg">
            <p>{dayjs(new Date()).format("dddd")}, </p>
            <p>{dayjs(new Date()).format("MMMM")}</p>
            <p>{dayjs(new Date()).format("DD")},</p>
            <p>{dayjs(new Date()).format("YYYY")}</p>
          </div>
        </div>

        <p className="absolute bottom-12 md:bottom-6 text-sm text-gray-400">
          Press spacebar to start
        </p>
      </div>
    </Modal>
  );
};

export default WelcomModal;
