import { useState } from 'react';
import { StyledLi, StyledItemImage } from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

const GalleyItem = ({ tags, webformatURL, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevModal => !prevModal);
  };

  return (
    <StyledLi>
      <StyledItemImage onClick={toggleModal} src={webformatURL} alt={tags} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} width="750" />
        </Modal>
      )}
    </StyledLi>
  );
};

GalleyItem.propTypes = {
  tags: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default GalleyItem;
