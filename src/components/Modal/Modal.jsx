import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWindow } from './Modal.style';
import propTypes from 'prop-types';

export default function Modal({ onClose, src, alt }) {
  useEffect(() => {
    window.addEventListener('keydown', clickEscape);
    return () => {
      window.removeEventListener('keydown', clickEscape);
    };
  });
  const clickEscape = event => {
    if (event.code !== 'Escape') {
      return;
    }
    onClose();
  };
  const clickBackdrop = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return createPortal(
    <ModalOverlay onClick={clickBackdrop}>
      <ModalWindow>
        <img src={src} alt={alt} />
      </ModalWindow>
    </ModalOverlay>,
    document.querySelector('#modal-root')
  );
}
Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  close: propTypes.func.isRequired,
};