import { useState } from "react";
import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSearch(inputValue);
  };

  return (
    <>
      <Toaster />
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <input
          className={styles.searchinput}
          type="text"
          value={inputValue}
          autoComplete="off"
          autoFocus
          onChange={handleInputChange}
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchBar;
