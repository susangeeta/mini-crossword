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
      <div className="w-[40rem] h-[30rem] bg-white rounded-md"></div>
    </Modal>
  );
};

export default WelcomModal;
