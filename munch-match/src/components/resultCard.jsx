import Rating from "./rating";
import dessert from "../images/dessert.png"


const ResultCard = ({ result }) => {


    return (
        <div className="button results">

                            
            <div className="resultsHeader">
                <h3>{result?.name}</h3>
                <h5>10 KM | {Array(result?.price).fill('$').join('')}</h5>
            </div>


            <div className="actionContainer">
            <button className="actionButton"><a href={result?.maps}  target="_blank"><h4>DIRECTIONS</h4></a></button>
            <button className="actionButton"><a href={result?.website} target="_blank"><h4>WEBSITE</h4></a></button>
            <button className="actionButton"><h4>CALL</h4></button>
            </div>

            <div className="infoContainer">
            <h5 className="rating"> <Rating value={result?.rating} total={result?.totalRatings}/> </h5>
            <h4>Services: </h4>
            <h5>Hours: {result?.openingHours}</h5>
            <h5>Address: {result?.formattedAddress}</h5>
            <h5>Phone: {result?.formattedPhone}</h5>
            </div>

            <img className="resultImage" src={dessert} alt="dessert"></img>
        </div>
    )
}

export default ResultCard