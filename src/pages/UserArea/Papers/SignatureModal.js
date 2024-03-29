import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import "./SignatureModal.css";

function SignatureModal({ isOpen, onClose, onSave }) {
  const signatureRef = useRef();

  const handleClear = () => {
    signatureRef.current.clear();
  };

  const handleSave = () => {
    const dataURL = signatureRef.current.toDataURL();
    onSave(dataURL); // Call the onSave function passed from the parent component
    onClose(); // Close the modal after saving the signature
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>חתום מטה</h2>
        <SignatureCanvas
          ref={signatureRef}
          canvasProps={{
            width: 500,
            height: 200,
            className: "signature-canvas",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "#015adf",
              color: "whitesmoke",
              padding: "1rem",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            ביטול
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "#015adf",
              color: "whitesmoke",
              padding: "1rem",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={handleClear}
          >
            נקה
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "#015adf",
              color: "whitesmoke",
              padding: "1rem",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={handleSave}
          >
            שמור
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignatureModal;
