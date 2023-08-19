//Tells react that this is an component
import { Component } from "react";
import "../App.css"
import Rating from "./rating";
import ResultCard from "./resultCard"
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
        this.fetchUserLocation().then((position) => {
          this.fetchResults(position.coords.latitude, position.coords.longitude);
        }).catch((err) => {
          console.log("Error in retrieving user location")
        }); 
      }

      fetchUserLocation() {
        return new Promise((resolve, reject) => {
          if (!navigator.geolocation) {
            reject(new Error("Location is not supported"))
          } else {
            navigator.geolocation.getCurrentPosition(resolve, reject)
          }
        });
      }
    
      fetchResults = (latitude, longitude) => {
        getResults(this.props.type, latitude, longitude)
          .then(results => {
            this.setState({ results });
            const locations = results.map(result => {
              return {
                latitude: result.latitude, 
                longitude: result.longitude
              };
            });
            this.initializeMap(locations); 
          })
          .catch(error => {
            console.error('Error fetching results:', error);
          });
      }

      initializeMap = (foodLocations) => {
        const center = {lat: foodLocations[0].latitude, lng: foodLocations[0].longitude}
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13, 
          center: center
        });

        foodLocations.forEach(location => {
          new google.maps.Marker({
            position: {lat: location.latitude, lng: location.longitude}, 
            map: map
          })
        })
      }

    render(){
        console.log(this.selectedType)
        const { results } = this.state;
        console.log(results[2]);

        return(
        //To export multiple components, surround it with a <div> tag
        <div>
          <div id="map" className="map"></div>
            <div className="resultsRow">
                <ResultCard result={results[0]}/>
                <ResultCard result={results[1]}/>
                <ResultCard result={results[2]}/>
            </div>
            <div className="resultsRow">
                <ResultCard result={results[3]}/>
                <ResultCard result={results[4]}/>
                <ResultCard result={results[5]}/>
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