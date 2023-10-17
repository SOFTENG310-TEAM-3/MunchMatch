import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./ShareModalContent.module.css";

const ShareButton = ({ icon, buttonText, shareHandler }) => {
  return (
    <>
      <button className={styles.copyButton} onClick={shareHandler}>
        <FontAwesomeIcon icon={icon} style={{ marginRight: "5px" }} />
        <h4>{buttonText}</h4>
      </button>
    </>
  );
};

export default ShareButton;