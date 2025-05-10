import { useEffect, useState } from "react";
import styles from "./App.module.css";
import GetPhotos from "./services/unsplash-service.js";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchPhotos = async (keyword, page) => {
    setLoading(true);
    setError(null);
    try {
      const data = await GetPhotos(keyword, page);
      setPhotos((prevPhotos) => (page === 1 ? data : [...prevPhotos, ...data]));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (keyword) {
      fetchPhotos(keyword, page);
    }
  }, [keyword, page]);

  const handleSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.headline}>Photo Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && page === 1 && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onImageClick={handleImageClick} />
      )}
      {photos.length > 0 && loading && page > 1 && <Loader />}
      {!loading &&
        photos.length > 0 &&
        (photos.length > 0 && photos.length < page * 10 ? (
          <p className={styles.noMoreImages}>No more images to load</p>
        ) : (
          photos.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />
        ))}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
}

export default App;
