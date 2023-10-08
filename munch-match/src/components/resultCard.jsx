import Rating from "./rating";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from "./resultCard.module.css"
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const shareIcon = {
    prefix: 'fas',
    iconName: 'arrow-up-from-bracket',
    icon: [
        512,
        512,
        [],
        null,
        'M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z'
    ],
};

// This is the result card component, it takes in a Prop (result) from which we populate the card with the right information
const ResultCard = ({ result }) => {
    return (

        <div className={`${styles.buttonResultCard} ${styles.results}`}>
            {/* This populates the card with the name of the place including its price, if not found an appropriate message is shown*/}
            <div className={styles.resultsHeader}>
                <h3>{result?.name ? result?.name || <Skeleton /> : "No nearby resturants found"}</h3>
                <h4>{Array(result?.price).fill('$').join('')}</h4>
            </div>
            {/*Here we populate the card with the different actions a user can take, such as directions, a link to the place website etc*/}
            <div className={styles.actionContainer}>
                <button className={styles.actionButton}><a href={result?.maps || <Skeleton />} target="_blank"><h4>DIRECTIONS</h4></a></button>
                <button className={styles.actionButton}><a href={result?.website || <Skeleton />} target="_blank"><h4>WEBSITE</h4></a></button>
                <button className={styles.shareButton}><a href={result?.website || <Skeleton />} target="_blank"><h4><FontAwesomeIcon icon={shareIcon} /></h4></a></button>
            </div>

            {/*Further information about the place, rating, opening hours, address, phone number etc*/}
            <div className={styles.infoContainer}>
                <h5 className="rating27"> <Rating value={result?.rating || <Skeleton />} total={result?.totalRatings} /> </h5>
                <h4>Services: </h4>
                <h5>Hours: {result?.openingHours ? result?.openingHours || <Skeleton /> : "N/A"}</h5>
                <h5>Address: {result?.formattedAddress ? result?.formattedAddress || <Skeleton /> : "N/A"}</h5>
                <h5>Phone: {result?.formattedPhone ? result?.formattedPhone || <Skeleton /> : "N/A"}</h5>
            </div>

            {/* Image only shows when there is one */}
            {result?.picture?.getUrl() &&
                (<div className={styles.resultImageContainer}>
                    <img className={styles.resultImage} src={result?.picture?.getUrl()} alt="picture of restaurant"></img>
                </div>)}
        </div>
    )

};

export default ResultCard;