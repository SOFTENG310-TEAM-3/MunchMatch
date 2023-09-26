import Rating from "./rating";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from "./resultCard.module.css"
import "../App.css"

// This is the result card component, it takes in a Prop (result) from which we populate the card with the right information
const ResultCard = ({ result }) => {
    return (
        
        <div className={`${styles.buttonResultCard} ${styles.results}`}>
            {/* This populates the card with the name of the place including its price, if not found an appropriate message is shown*/}
            <div className={styles.resultsHeader}>
                <h3>{result?.name ? result?.name || <Skeleton/> : "No nearby resturants found" }</h3>
                <h4>{Array(result?.price).fill('$').join('')}</h4>
            </div>
            {/*Here we populate the card with the different actions a user can take, such as directions, a link to the place website etc*/}
            <div className={styles.actionContainer}>
            <button className={styles.actionButton}><a href={result?.maps|| <Skeleton/>}  target="_blank"><h4>DIRECTIONS</h4></a></button>
            <button className={styles.actionButton}><a href={result?.website|| <Skeleton/>} target="_blank"><h4>WEBSITE</h4></a></button>
            </div>

            {/*Further information about the place, rating, opening hours, address, phone number etc*/}
            <div className={styles.infoContainer}>
            <h5 className="rating27"> <Rating value={result?.rating|| <Skeleton/>} total={result?.totalRatings}/> </h5>
            <h4>Services: </h4>
            <h5>Hours: {result?.openingHours ? result?.openingHours|| <Skeleton/> : "N/A"}</h5>
            <h5>Address: {result?.formattedAddress ? result?.formattedAddress || <Skeleton/>: "N/A"}</h5>
            <h5>Phone: {result?.formattedPhone ? result?.formattedPhone || <Skeleton/>: "N/A"}</h5>
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