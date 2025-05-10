import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

function ImageGallery({ photos, onImageClick }) {
  return (
    <ul className={styles.gallery}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard photo={photo} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
