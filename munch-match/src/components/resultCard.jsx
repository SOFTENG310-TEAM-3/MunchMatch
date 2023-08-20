import Rating from "./rating";
import dessert from "../images/dessert.png"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ResultCard = ({ result }) => {
    return (
        
        <div className="button results">
            
            <div className="resultsHeader">
                <h3>{result?.name ? result?.name || <Skeleton/> : "No nearby resturants found" }</h3>
                <h4>{Array(result?.price).fill('$').join('')}</h4>
            </div>

            <div className="actionContainer">
            <button className="actionButton"><a href={result?.maps|| <Skeleton/>}  target="_blank"><h4>DIRECTIONS</h4></a></button>
            <button className="actionButton"><a href={result?.website|| <Skeleton/>} target="_blank"><h4>WEBSITE</h4></a></button>
            </div>

            <div className="infoContainer">
            <h5 className="rating"> <Rating value={result?.rating|| <Skeleton/>} total={result?.totalRatings}/> </h5>
            <h4>Services: </h4>
            <h5>Hours: {result?.openingHours ? result?.openingHours|| <Skeleton/> : "N/A"}</h5>
            <h5>Address: {result?.formattedAddress ? result?.formattedAddress || <Skeleton/>: "N/A"}</h5>
            <h5>Phone: {result?.formattedPhone ? result?.formattedPhone || <Skeleton/>: "N/A"}</h5>
            </div>
            
            {/* Image only shows when there is one */}
            {result?.picture?.getUrl() && 
            (<div className="resultImageContainer">
                <img className="resultImage" src={result?.picture?.getUrl()} alt="picture of restaurant"></img>
            </div>)}
        </div>
    )
    
};

export default ResultCard;