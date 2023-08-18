//Tells react that this is an component
import { Component } from "react";
import "../App.css"
import Rating from "./rating";
import dessert from "../images/dessert.png"


//Creates the Button component
class Results extends Component{
    onBackClick = () => {
    this.props.onBackClick();
    }


    render(){
        return(
        //To export multiple components, surround it with a <div> tag
        <div>
            <div className="resultsRow">
                <div className="button results">

                    <div className="resultsHeader">
                    <h3>Restaurant Name</h3>
                    <h5>10 KM | $$ </h5>
                    </div>

                    <div className="actionContainer">
                    <button className="actionButton"><h4>DIRECTIONS</h4></button>
                    <button className="actionButton"><h4>WEBSITE</h4></button>
                    <button className="actionButton"><h4>CALL</h4></button>
                    </div>

                    <div className="infoContainer">
                    <h5 className="rating"> <Rating value={3.5} /> </h5>
                    <h4>Services: </h4>
                    <h5>Hours: </h5>
                    <h5>Address: </h5>
                    <h5>Phone: </h5>
                    </div>
                    
                    <img className="resultImage" src={dessert} alt="dessert"></img>
                </div>
                <div className="button results">

                    <div className="resultsHeader">
                    <h3>Restaurant Name</h3>
                    <h5>10 KM | $$ </h5>
                    </div>

                    <div className="actionContainer">
                    <button className="actionButton"><h4>DIRECTIONS</h4></button>
                    <button className="actionButton"><h4>WEBSITE</h4></button>
                    <button className="actionButton"><h4>CALL</h4></button>
                    </div>

                    <div className="infoContainer">
                    <h5 className="rating"> <Rating value={3.5} /> </h5>
                    <h4>Services: </h4>
                    <h5>Hours: </h5>
                    <h5>Address: </h5>
                    <h5>Phone: </h5>
                    </div>
                    
                    <img className="resultImage" src={dessert} alt="dessert"></img>
                </div>
                <div className="button results">

                    <div className="resultsHeader">
                    <h3>Restaurant Name</h3>
                    <h5>10 KM | $$ </h5>
                    </div>

                    <div className="actionContainer">
                    <button className="actionButton"><h4>DIRECTIONS</h4></button>
                    <button className="actionButton"><h4>WEBSITE</h4></button>
                    <button className="actionButton"><h4>CALL</h4></button>
                    </div>

                    <div className="infoContainer">
                    <h5 className="rating"> <Rating value={3.5} /> </h5>
                    <h4>Services: </h4>
                    <h5>Hours: </h5>
                    <h5>Address: </h5>
                    <h5>Phone: </h5>
                    </div>
                    
                    <img className="resultImage" src={dessert} alt="dessert"></img>
                </div>
            </div>
            <div className="resultsRow">
                <div className="button results">

                    <div className="resultsHeader">
                    <h3>Restaurant Name</h3>
                    <h5>10 KM | $$ </h5>
                    </div>

                    <div className="actionContainer">
                    <button className="actionButton"><h4>DIRECTIONS</h4></button>
                    <button className="actionButton"><h4>WEBSITE</h4></button>
                    <button className="actionButton"><h4>CALL</h4></button>
                    </div>

                    <div className="infoContainer">
                    <h5 className="rating"> <Rating value={3.5} /> </h5>
                    <h4>Services: </h4>
                    <h5>Hours: </h5>
                    <h5>Address: </h5>
                    <h5>Phone: </h5>
                    </div>
                    
                    <img className="resultImage" src={dessert} alt="dessert"></img>
                </div>
                <div className="button results">

                    <div className="resultsHeader">
                    <h3>Restaurant Name</h3>
                    <h5>10 KM | $$ </h5>
                    </div>

                    <div className="actionContainer">
                    <button className="actionButton"><h4>DIRECTIONS</h4></button>
                    <button className="actionButton"><h4>WEBSITE</h4></button>
                    <button className="actionButton"><h4>CALL</h4></button>
                    </div>

                    <div className="infoContainer">
                    <h5 className="rating"> <Rating value={3.5} /> </h5>
                    <h4>Services: </h4>
                    <h5>Hours: </h5>
                    <h5>Address: </h5>
                    <h5>Phone: </h5>
                    </div>
                    
                    <img className="resultImage" src={dessert} alt="dessert"></img>
                </div>
                <div className="button results">

                    <div className="resultsHeader">
                    <h3>Restaurant Name</h3>
                    <h5>10 KM | $$ </h5>
                    </div>

                    <div className="actionContainer">
                    <button className="actionButton"><h4>DIRECTIONS</h4></button>
                    <button className="actionButton"><h4>WEBSITE</h4></button>
                    <button className="actionButton"><h4>CALL</h4></button>
                    </div>

                    <div className="infoContainer">
                    <h5 className="rating"> <Rating value={3.5} /> </h5>
                    <h4>Services: </h4>
                    <h5>Hours: </h5>
                    <h5>Address: </h5>
                    <h5>Phone: </h5>
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