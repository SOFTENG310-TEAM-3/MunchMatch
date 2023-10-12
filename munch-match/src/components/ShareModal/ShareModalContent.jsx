import { faFacebook, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import styles from "./ShareModalContent.module.css";
import ShareButton from "./ShareButton";

const ShareModalContent = () => {
    const handleCopyLink = () => {

    };

    const handleShareFacebook = () => {
        
    };

    const handleShareTwitter = () => {
        
    };

    const handleShareEmail = () => {
        
    };

    return (
        <>
        <h2>Share with friends</h2>
        <div className={styles.detailsContainer}>
            <img src={require(`../../images/sushi.png`)} />
            <div className={styles.detailsText}>
            <h3>Restaurant Name</h3>
            <h4>Restaurant Address</h4>
            </div>
        </div>
        <h4>Link to share:</h4>
        <div className={styles.linkContainer}>
            <input
            className={styles.linkField}
            type="text"
            placeholder="Insert Link"
            readOnly
            />
            <button className={styles.copyButton}>
            <h4>Copy Link</h4>
            </button>
        </div>
        <div className={styles.shareButtonsContainer}>
            <ShareButton icon={faFacebook} buttonText="Facebook" />
            <ShareButton icon={faTwitter} buttonText="Twitter" />
            <ShareButton icon={faGoogle} buttonText="Gmail" />
        </div>
        </>
  );
};

export default ShareModalContent;
