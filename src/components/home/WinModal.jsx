import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { puzzleData } from "../../constants";
import { Modal } from "../common";

const WinModal = ({ grid }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);

  const checkWin = () => {
    const acrossCorrect = Object.entries(puzzleData.across).every(
      ([number, clue]) => {
        const rowCells =
          grid[clue.position.row]?.slice(
            clue.position.col,
            clue.position.col + clue.answer.length
          ) || [];
        const currentAnswer = rowCells.join("").toUpperCase().trim();
        return clue.answer.toUpperCase() === currentAnswer;
      }
    );

    const downCorrect = Object.entries(puzzleData.down).every(
      ([number, clue]) => {
        const colCells = Array.from({ length: clue.answer.length }, (_, i) => {
          return (
            grid[clue.position.row + i]?.[clue.position.col]
              ?.toUpperCase()
              .trim() || ""
          );
        });
        const currentAnswer = colCells.join("");
        return clue.answer.toUpperCase() === currentAnswer;
      }
    );

    return acrossCorrect && downCorrect;
  };

  useEffect(() => {
    const completed = checkWin();
    console.log("Win check result:", completed);

    if (completed && !isComplete) {
      setIsComplete(true);
      setShowWinModal(true);
      triggerWinAnimation();
    }
  }, [grid, isComplete]);

  const triggerWinAnimation = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <Modal open={showWinModal} onClose={() => setShowWinModal(false)}>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Congratulations! 🎉</h2>
        <p className="mb-4">You've successfully completed the puzzle!</p>
        <button
          onClick={() => setShowWinModal(false)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default WinModal;
