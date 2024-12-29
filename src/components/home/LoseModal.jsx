/* eslint-disable react/prop-types */
import { ArrowLeft, Clock, MessageCircleX, Star } from "lucide-react";
import { useTime } from "../../contexts/TimeContext";
import generateGrid from "../../utils";
import { Modal } from "../common";

const LoseModal = ({ showLossModal, setShowLossModal, setGrid }) => {
  const { formatTime } = useTime();

  const handleClear = () => {
    setGrid(generateGrid(5));
    setShowLossModal(false);
  };

  return (
    <Modal isOpen={showLossModal} onClose={() => setShowLossModal(false)}>
      <div className="p-6 text-center bg-white w-[20rem] h-[25rem]   md:w-[40rem]  md:h-[28rem] flex items-center justify-center flex-col rounded-lg relative">
        <div className="absolute top-6 flex justify-between w-full px-8">
          <Clock className="w-6 h-6 text-gray-400" />
          <MessageCircleX className="w-8 h-8 text-red-500" />
          <Star className="w-6 h-6 text-gray-400" />
        </div>

        <div className="bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          Puzzle InComplete!
        </div>

        <h2 className=" text-xl md:text-4xl font-bold mb-2">Game Over! 💔</h2>
        <p className="mb-4 text-base  md:text-lg">{`You played for ${formatTime()} seconds!`}</p>

        <button
          onClick={handleClear}
          className="px-8 py-3 text-white bg-primary rounded-full text-lg flex items-center gap-2 hover:bg-primary/90 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Puzzle
        </button>
      </div>
    </Modal>
  );
};

export default LoseModal;
