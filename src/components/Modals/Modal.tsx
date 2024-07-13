import React, { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up the style when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items- justify-center bg-black bg-opacity-50 p-10 overflow-hidden overflow-y-auto h-full min-h-full w-full">
      <div className="bg-white rounded-2xl overflow-auto shadow-xl transform transition-all max-w-[980px] w-full max-h-full min-h-[600px] ">
        <div className="md:p-20 p-10">{children}</div>
        {/* <div className="p-4 flex justify-end">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onClose}>
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
