import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Modal } from "../common";

const WelcomModal = () => {
  const [isWelcomModalOpen, setIsWelcomModalOpen] = useState(false);

  useEffect(() => {
    setIsWelcomModalOpen(true);
  }, []);

  return (
    <Modal
      isOpen={isWelcomModalOpen}
      onClose={() => setIsWelcomModalOpen(false)}
    >
      <div className="w-[40rem] h-[30rem] bg-white rounded-md flex items-center justify-center flex-col">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold text-center">
              The Mini Crossword
            </h1>
            <p className="text-3xl font-medium text-center text-gray-600">
              Ready to start solving?
            </p>
          </div>
          <button
            onClick={() => setIsWelcomModalOpen(false)}
            className="px-12 py-4 text-lg w-fit bg-primary text-white rounded-full"
          >
            Play now
          </button>
          <div className="flex items-center gap-1.5 font-semibold text-lg">
            <p>{dayjs(new Date()).format("dddd")}, </p>
            <p>{dayjs(new Date()).format("MMMM")}</p>
            <p>{dayjs(new Date()).format("DD")},</p>
            <p>{dayjs(new Date()).format("YYYY")}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WelcomModal;
