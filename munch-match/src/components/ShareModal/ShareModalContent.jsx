import { faFacebook, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import styles from "./ShareModalContent.module.css";
import ShareButton from "./ShareButton";

const ShareModalContent = ({ imageUrl, name, address, shareUrl }) => {
    const handleCopyLink = () => {
        if (shareUrl) {
            navigator.clipboard.writeText(shareUrl)
                .then(() => {
                    // Text successfully copied to clipboard
                    console.log('Link copied to clipboard:', shareUrl);
                })
                .catch(err => {
                    // Handle errors
                    console.error('Failed to copy link to clipboard:', err);
                });
        }
    };

    const handleShareFacebook = () => {
        if (shareUrl) {
            const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
            window.open(facebookShareUrl, '_blank', 'width=600,height=400');
        }
    };

    const handleShareTwitter = () => {
        if (shareUrl) {
            const shareText = "Let's grab food! Discovered using MunchMatch.";
            const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
            window.open(twitterShareUrl, '_blank', 'width=600,height=400');
        }
    };

    const handleShareEmail = () => {
        if (shareUrl) {
            const subject = "Let's get food!"
            const body = `Discovered using MunchMatch: ${shareUrl}`
            const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        }
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
                        value={shareUrl}
                        readOnly
                    />
                    <button className={styles.copyButton} onClick={handleCopyLink}>
                        <h4>Copy Link</h4>
                    </button>
                </div>
            </div>
            <div className={styles.shareButtonsContainer}>
                <ShareButton icon={faFacebook} buttonText="Facebook" shareHandler={handleShareFacebook} />
                <ShareButton icon={faTwitter} buttonText="Twitter" shareHandler={handleShareTwitter} />
                <ShareButton icon={faGoogle} buttonText="Gmail" shareHandler={handleShareEmail} />
            </div>
        </>
    );
};

export default ShareModalContent;
