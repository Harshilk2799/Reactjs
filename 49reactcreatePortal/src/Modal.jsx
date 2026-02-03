import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(3px)",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        style={{
          background: "#ffffff",
          padding: "24px",
          borderRadius: "12px",
          minWidth: "320px",
          maxWidth: "500px",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
          animation: "fadeIn 0.2s ease-in-out",
          position: "relative",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "none",
            background: "transparent",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ✖
        </button>

        {children}
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}

export default Modal;
