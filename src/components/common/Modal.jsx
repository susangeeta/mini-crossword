/* eslint-disable react/prop-types */
/**
 * Custom modal
 */
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div onClick={(e) => e.stopPropagation()} className=" md:w-fit  md:h-fit">
        {children}
      </div>
    </div>
  );
};

export default Modal;
