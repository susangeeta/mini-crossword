import confetti from "canvas-confetti";
import { useEffect } from "react";
import { Modal } from "../common";

const WinModal = ({ isComplete, setIsComplete }) => {
  // Trigger confetti animation when isComplete becomes true
  useEffect(() => {
    if (isComplete) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [isComplete]);

  return (
    <Modal isOpen={isComplete} onClose={() => setIsComplete(false)}>
      <div className="p-6 text-center bg-white w-[40rem] h-[25rem] rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Congratulations! 🎉</h2>
        <p className="mb-4">You've successfully completed the puzzle!</p>
        <button
          onClick={() => setIsComplete(false)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default WinModal;
