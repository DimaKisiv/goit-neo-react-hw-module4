import styles from "./ImageCard.module.css";

function ImageCard({ photo, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(photo)}>
      <img src={photo.urls.small} alt={photo.description || "Photo"} />
    </div>
  );
}

export default ImageCard;
