# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

/_ eslint-disable react/prop-types _/
import { useTime } from "../../contexts/TimeContext";
import generateGrid from "../../utils";
import { Modal } from "../common";

const LoseModal = ({ showLossModal, setShowLossModal, setGrid }) => {
const { formatTime } = useTime();

/\*\*

- Logic to handle game reset
  \*/
  const handleClear = () => {
  setGrid(generateGrid(5));
  setShowLossModal(false);
  };

return (
<Modal isOpen={showLossModal} onClose={() => setShowLossModal(false)}>
<div className="p-6 text-center bg-white w-[40rem] h-[25rem] flex items-center justify-center flex-col rounded-lg">
<h2 className="text-4xl font-bold mb-2">Game Over! 💔</h2>
<p className="mb-4 text-lg">{`You played for ${formatTime()} seconds!`}</p>
<button
          onClick={handleClear}
          className="px-8 py-3 text-white bg-primary rounded-lg text-lg"
        >
Back to Puzzle
</button>
</div>
</Modal>
);
};

export default LoseModal;
