import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWindow } from './Modal.style';
import propTypes from 'prop-types';

export default class Modal extends useEffect {
  componentDidMount() {
    window.addEventListener('keydown', this.clickEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEscape);
  }

  clickEscape = event => {
    if (event.code !== 'Escape') {
      return;
    }
    this.props.close();
  };

  clickBackdrop = event => {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target !== event.currentTarget) {
      return;
    }
    this.props.close();
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <ModalOverlay onClick={this.clickBackdrop}>
        <ModalWindow>
          <img src={src} alt={alt} />
        </ModalWindow>
      </ModalOverlay>,
      document.querySelector('#modal-root')
    );
  }
}

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  close: propTypes.func.isRequired,
};