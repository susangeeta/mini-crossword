/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { PuzzleSetting } from ".";
import { useTime } from "../../contexts/TimeContext";
import generateGrid from "../../utils";
import PauseModal from "./PauseModal";

const Header = ({ setGrid }) => {
  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const { time, startTimer, stopTimer, resetTimer, formatTime } = useTime();

  /**
   * Function to clear all the states and reset the game
   */
  const handleClear = () => {
    resetTimer();
    startTimer();
    setGrid(generateGrid(5));
  };

  return (
    <>
      <section className="bg-[#f5f5f5]">
        <div className="py-4 px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpenSettingModal(true)}
              className="text-2xl text-primary"
            >
              <IoSettingsSharp />
            </button>

            <div
              onClick={() => {
                stopTimer();
                setIsGamePaused(true);
              }}
              className="font-semibold text-lg cursor-pointer flex items-center gap-2"
            >
              {formatTime(time)}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Reset
            </button>
          </div>
        </div>
      </section>
      <PuzzleSetting
        setOpenSettingModal={setOpenSettingModal}
        openSettingModal={openSettingModal}
      />
      <PauseModal
        isGamePaused={isGamePaused}
        setIsGamePaused={setIsGamePaused}
      />
    </>
  );
};

export default Header;
