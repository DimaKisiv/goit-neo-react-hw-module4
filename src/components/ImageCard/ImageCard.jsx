import styles from "./ImageCard.module.css";

function ImageCard({ photo }) {
  return (
    <div className={styles.card}>
      <img src={photo.urls.small} alt={photo.description || "Photo"} />
    </div>
  );
}

export default ImageCard;