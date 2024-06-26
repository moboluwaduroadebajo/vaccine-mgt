import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-10">
      <div className="bg-white rounded-2xl overflow-auto shadow-xl transform transition-all max-w-[980px] w-full max-h-full min-h-[600px]">
        <div className="px-20 py-20">{children}</div>
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
