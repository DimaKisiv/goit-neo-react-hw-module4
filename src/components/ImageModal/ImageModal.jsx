import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ isOpen, onClose, image }) {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.content} onClick={onClose}>
        <img
          src={image?.urls?.regular}
          alt={image?.description || "Large view"}
          className={styles.image}
          onClick={(e) => e.stopPropagation()}
        />
        <div className={styles.info} onClick={(e) => e.stopPropagation()}>
          {image?.description && (
            <p className={styles.description}>{image.description}</p>
          )}
          <p className={styles.author}>
            <strong>Author:</strong> {image?.user?.name || "Unknown"}
          </p>
          <a
            href={image?.links?.html}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View on Unsplash
          </a>
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;
