import React from "react";
import ReactDOM from "react-dom";

const CheckoutModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg p-10 max-w-sm w-full">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl me-2"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default CheckoutModal;
