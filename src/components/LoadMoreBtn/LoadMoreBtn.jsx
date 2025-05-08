import styles from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <button className={styles.loadMore} onClick={onClick}>
      Load More
    </button>
  );
}

export default LoadMoreBtn;