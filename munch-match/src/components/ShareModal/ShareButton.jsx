import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./ShareModalContent.module.css";

const ShareButton = ({ icon, buttonText }) => {
  return (
    <>
      <button
        className={styles.copyButton}
      >
        <FontAwesomeIcon icon={icon} style={{ marginRight: "5px" }} />
        <h4>{buttonText}</h4>
      </button>
    </>
  );
};

export default ShareButton;