import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const MyModal = ({ open, children, disableGlobalScroll, setOpen }) => {
  useEffect(() => {
    if (disableGlobalScroll && open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open, disableGlobalScroll]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button className="close-button" onClick={() => setOpen(false)}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default MyModal;
