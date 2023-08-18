//Tells react that this is an component
import { Component } from "react";
import "../App.css"
import Rating from "./rating";
import dessert from "../images/dessert.png"
import { getResults } from "../Results.js"

//Creates the Button component
class Results extends Component{
    state = {
        results: [],
      };
    
      onBackClick = () => {
        this.props.onBackClick();
      };
    
      componentDidMount() {
        this.fetchResults(); 
      }
    
      fetchResults = () => {
        getResults(this.props.type, 10)
          .then(results => {
            this.setState({ results }); 
          })
          .catch(error => {
            console.error('Error fetching results:', error);
          });
      }

    render(){
        console.log(this.selectedType)
        const { results } = this.state;
        console.log(results[2]);

        return(
        //To export multiple components, surround it with a <div> tag
        <div>
            <div className="resultsRow">
                <div className="button results">

                
                    <div className="resultsHeader">
                        <h3>{results[0]?.name}</h3>
                        <h5>10 KM | {Array(results[0]?.price).fill('$').join('')}</h5>
                    </div>
                

                    <div className="actionContainer">
                    <button className="actionButton"><a href={results[0]?.maps}><h4>DIRECTIONS</h4></a></button>
                    <button className="actionButton"><a href={results[0]?.website}><h4>WEBSITE</h4></a></button>
                    <button className="actionButton"><h4>CALL</h4></button>
                    </div>

                    <div className="infoContainer">
                    <h5 className="rating"> <Rating value={results[0]?.rating} total={results[0]?.totalRatings}/> </h5>
                    <h4>Services: </h4>
                    <h5>Hours: {results[0]?.openingHours}</h5>
                    <h5>Address: {results[0]?.formattedAddress}</h5>
                    <h5>Phone: {results[0]?.formattedPhone}</h5>
                    </div>
                    
                    <img className="resultImage" src={dessert} alt="dessert"></img>
                </div>
                <div className="button results">

                    {results.length > 0 && (
                        <div className="resultsHeader">
                            <h3>{results[1]?.name}</h3>
                            <h5>10 KM | {Array(results[1]?.price).fill('$').join('')}</h5>
                        </div>
                    )}

                    <div className="actionContainer">
                    <button className="actionButton"><a href={results[1]?.maps}><h4>DIRECTIONS</h4></a></button>
                    <button className="actionButton"><a href={results[1]?.website}><h4>WEBSITE</h4></a></button>
                    <button className="actionButton"><h4>CALL</h4></button>
                    </div>

                    <div className="infoContainer">
                    <h5 className="rating"> <Rating value={results[1]?.rating} total={results[1]?.totalRatings}/> </h5>
                    <h4>Services: </h4>
                    <h5>Hours: {results[1]?.openingHours}</h5>
                    <h5>Address: {results[1]?.formattedAddress}</h5>
                    <h5>Phone: {results[1]?.formattedPhone}</h5>
                    </div>
                    
                    <img className="resultImage" src={dessert} alt="dessert"></img>
                </div>
                <div className="button results">

                    {results.length > 0 && (
                        <div className="resultsHeader">
                            <h3>{results[2]?.name}</h3>
                            <h5>10 KM | {Array(results[2]?.price).fill('$').join('')}</h5>
                        </div>
                    )}

                    <div className="actionContainer">
                    <button className="actionButton"><a href={results[2]?.maps}><h4>DIRECTIONS</h4></a></button>
                    <button className="actionButton"><a href={results[2]?.website}><h4>WEBSITE</h4></a></button>
                    <button className="actionButton"><h4>CALL</h4></button>
                    </div>

                    <div className="infoContainer">
                    <h5 className="rating"> <Rating value={results[2]?.rating} total={results[2]?.totalRatings}/> </h5>
                    <h4>Services: </h4>
                    <h5>Hours: {results[2]?.openingHours}</h5>
                    <h5>Address: {results[2]?.formattedAddress}</h5>
                    <h5>Phone: {results[2]?.formattedPhone}</h5>
                    </div>
                    
                    <img className="resultImage" src={dessert} alt="dessert"></img>
                </div>
            </div>
            <div className="resultsRow">
                <div className="button results">

                    {results.length > 0 && (
                        <div className="resultsHeader">
                            <h3>{results[3]?.name}</h3>
                            <h5>10 KM | {Array(results[3]?.price).fill('$').join('')}</h5>
                        </div>
                    )}

                    <div className="actionContainer">
                    <button className="actionButton"><a href={results[3]?.maps}><h4>DIRECTIONS</h4></a></button>
                    <button className="actionButton"><a href={results[3]?.website}><h4>WEBSITE</h4></a></button>
                    <button className="actionButton"><h4>CALL</h4></button>
                    </div>

                    <div className="infoContainer">
                    <h5 className="rating"> <Rating value={results[3]?.rating} total={results[3]?.totalRatings}/> </h5>
                    <h4>Services: </h4>
                    <h5>Hours: {results[3]?.openingHours}</h5>
                    <h5>Address: {results[3]?.formattedAddress}</h5>
                    <h5>Phone: {results[3]?.formattedPhone}</h5>
                    </div>
                    
                    <img className="resultImage" src={dessert} alt="dessert"></img>
                </div>
                <div className="button results">

                    {results.length > 0 && (
                        <div className="resultsHeader">
                            <h3>{results[4]?.name}</h3>
                            <h5>10 KM | {Array(results[4]?.price).fill('$').join('')}</h5>
                        </div>
                    )}

                    <div className="actionContainer">
                    <button className="actionButton"><a href={results[4]?.maps}><h4>DIRECTIONS</h4></a></button>
                    <button className="actionButton"><a href={results[4]?.website}><h4>WEBSITE</h4></a></button>
                    <button className="actionButton"><h4>CALL</h4></button>
                    </div>

                    <div className="infoContainer">
                    <h5 className="rating"> <Rating value={results[4]?.rating} total={results[4]?.totalRatings}/> </h5>
                    <h4>Services: </h4>
                    <h5>Hours: {results[4]?.openingHours}</h5>
                    <h5>Address: {results[4]?.formattedAddress}</h5>
                    <h5>Phone: {results[4]?.formattedPhone}</h5>
                    </div>
                    
                    <img className="resultImage" src={dessert} alt="dessert"></img>
                </div>
                <div className="button results">

                    {results.length > 0 && (
                        <div className="resultsHeader">
                            <h3>{results[5]?.name}</h3>
                            <h5>10 KM | {Array(results[5]?.price).fill('$').join('')}</h5>
                        </div>
                    )}

                    <div className="actionContainer">
                    <button className="actionButton"><a href={results[5]?.maps}><h4>DIRECTIONS</h4></a></button>
                    <button className="actionButton"><a href={results[5]?.website}><h4>WEBSITE</h4></a></button>
                    <button className="actionButton"><h4>CALL</h4></button>
                    </div>

                    <div className="infoContainer">
                    <h5 className="rating"> <Rating value={results[5]?.rating} total={results[5]?.totalRatings}/> </h5>
                    <h4>Services: </h4>
                    <h5>Hours: {results[5]?.openingHours}</h5>
                    <h5>Address: {results[5]?.formattedAddress}</h5>
                    <h5>Phone: {results[5]?.formattedPhone}</h5>
                    </div>
                    
                    <img className="resultImage" src={dessert} alt="dessert"></img>
                </div>
            </div>
            <div>
            <button className="button" onClick={() => this.onBackClick()} style={{width: "30%"}}><h3>Choose Again</h3></button>
            </div>
        </div>
        
        
        );
    }
}

//Exports the component
export default Results;