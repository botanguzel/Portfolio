import React, { useState } from 'react';
import '../Styles/project.css'

function ImageComponent({ imageURL, imageAlt }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <img
        src={imageURL}
        alt={imageAlt}
        onClick={openModal}
        style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
      />

      {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content">
            <img
              src={imageURL}
              alt={imageAlt}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageComponent;
