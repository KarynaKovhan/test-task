import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './MyModal.css';

const modalRoot = document.getElementById('modal-root') || document.createElement('div');

const MyModal = ({ open, children, disableGlobalScroll, setOpen }) => { // Приймаємо setOpen як проп
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
        <button className="close-button" onClick={() => setOpen(false)}>✖</button>
      </div>
    </div>,
    modalRoot
  );
};

export default MyModal;
