import { useEffect, useState } from "react";
import "./App.css";
import GetPhotos from "./services/unsplash-service.js";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

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

  return (
    <div className="App">
      <h1>Photo Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && page === 1 && <Loader />} 
      {error && <ErrorMessage message={error.message} />}
      <ImageGallery photos={photos} />
      {photos.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {photos.length > 0 && loading && page > 1 && <Loader />} 
    </div>
  );
}

export default App;