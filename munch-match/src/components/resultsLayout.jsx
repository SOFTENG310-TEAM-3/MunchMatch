//Tells react that this is an component
import {Component} from "react";
import "../App.css"
import ResultCard from "./resultCard"
import {getResults} from "../services/MapsService.js"
import styles from "./resultsLayout.module.css"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

//Creates the google map variable
const google = window.google;

//Creates the Button component
class Results extends Component {

    state = {
        results: [],
        ratingRange: [0, 5],
    };

    onBackClick = () => {
        this.props.onBackClick();
    };

    componentDidMount() {
        // Obtain user location when results are requested 
        this.fetchUserLocation().then((position) => {
            this.fetchResults(position.coords.latitude, position.coords.longitude);
        }).catch((err) => {
            console.log("Error in retrieving user location")
        });
    }

    // Function to fetch user location using geolocation
    fetchUserLocation() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error("Location is not supported"))
            } else {
                navigator.geolocation.getCurrentPosition(resolve, reject)
            }
        });
    }


    // Call our api with the users coordinates and set results
    fetchResults = (latitude, longitude) => {
        getResults(this.props.type, latitude, longitude, this.state.ratingRange)
            .then(results => {
                // Make sure the results are sorted by rating
                const sortedResults = results.sort((r1, r2) => r2.rating - r1.rating);
                this.setState({results: sortedResults});
                // Get the coordinates of the restaurants and initialize our embedded map
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
    // Function to initialize embedded map
    initializeMap = (foodLocations) => {
        const center = {lat: foodLocations[0].latitude, lng: foodLocations[0].longitude}
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: center
        });

        // Loop through each location and extract its coordinates and make a new marker on the map
        foodLocations.forEach(location => {
            new google.maps.Marker({
                position: {lat: location.latitude, lng: location.longitude},
                map: map
            })
        })
    }

    updateRating = (range) => {
        this.setState({ratingRange: range});
        this.componentDidMount();
    }

    render() {
        const {results, ratingRange} = this.state;

        return (
            //To export multiple components, surround it with a <div> tag
            <div className={styles.resultsContainer}>
                <h3>Rating Range</h3>
                <RangeSlider min={0} max={5} defaultValue={[0, 5]} step={0.1} onInput={(range) => this.updateRating(range)}/>
                <p>{ratingRange[0]} - {ratingRange[1]} stars</p>
                <div className={styles.resultsRow}>
                    <ResultCard result={results[0]}/>
                    <ResultCard result={results[1]}/>
                    <ResultCard result={results[2]}/>
                </div>
                <div className={styles.resultsRow}>
                    <ResultCard result={results[3]}/>
                    <ResultCard result={results[4]}/>
                    <ResultCard result={results[5]}/>
                </div>
                <div className={styles.resultsRow}>
                    <ResultCard result={results[6]}/>
                    <ResultCard result={results[7]}/>
                    <ResultCard result={results[8]}/>
                </div>
                <div id="map" className={styles.map}></div>
                <div>
                    <button className={styles.buttonResultLayout} onClick={() => this.onBackClick()}
                            style={{width: "30%"}}><h3>Choose Again</h3></button>
                </div>
            </div>
        );
    }
}

//Exports the component
export default Results;