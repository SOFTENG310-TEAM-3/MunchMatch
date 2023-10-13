import { faFacebook, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import styles from "./ShareModalContent.module.css";
import ShareButton from "./ShareButton";

const ShareModalContent = ({ imageUrl, name, address, shareUrl }) => {
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
            <img className={styles.restaurantImage} src={imageUrl} />
            <div className={styles.detailsText}>
            <h3>{name}</h3>
            <h4>{address}</h4>
            </div>
        </div>
        <div className={styles.linkContainer}>
            <h4>Link to share:</h4>
            <div className={styles.copyLink}>
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
