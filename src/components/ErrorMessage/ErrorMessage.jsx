import styles from "./ErrorMessage.module.css";

function ErrorMessage({ message }) {
  return <p className={styles.error}>Error: {message}</p>;
}

export default ErrorMessage;