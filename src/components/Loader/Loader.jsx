import styles from "./Loader.module.css";
import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className={styles.loader}>
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
}

export default Loader;
