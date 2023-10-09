/**
 * This script interacts with the google maps places api to retrieve the necessary information.
 *
 * getResults() - Takes input the query type and the users coordinate information to retrieve information such as place name, rating etc..
 * fetchAllDetails() -
 */


//Creates the google map variable
const google = window.google;

function getResults(queryType, lat, lng, ratingRange, priceRanges) {
    //Stores the user's location as google.maps.LatLng (Latitude and Longitude)
    //Change location variables to props variables
    const userLocation = new google.maps.LatLng(lat, lng);

    //The parameters for requesting nearby locations for places to eat
    let request = {
        //Change query to button input
        query: queryType,
        location: userLocation,
        //Distance from userLocation which is in meters
        radius: 5000,
        openNow: true,
        type: "restaurant",
    };
    //Creates the variable on where it will store the output of the requested data should be
    let service = new google.maps.places.PlacesService(
        document.createElement("div")
    );

    //Gets the data and retrieves the data to the callback function
    return new Promise((resolve, reject) => {
        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                let extractedResults = [];
                (async () => {
                    try {
                        let detailed_results = await fetchAllDetails(results, [], service);
                        // Code to run after fetchAllDetails has completed
                        console.log("All details fetched and processed.");
                        const today = new Date();
                        const days = [6, 0, 1, 2, 3, 4, 5];
                        const dayOfWeek = today.getDay();

                        const ratingFilteredResults = detailed_results.filter(result => {
                            const rating = result.rating;
                            return rating >= ratingRange[0] && rating <= ratingRange[1];
                        });

                        const priceFilteredResults = ratingFilteredResults.filter(result => {
                            const price = result?.price_level ?? 1;
                            const priceString = price.toString();
                            return priceRanges[priceString];
                        });

                        extractedResults = priceFilteredResults.slice(0, 6).map((place) => ({
                            // Extract the necessary information from the raw result set that we need to represent to the user
                            // First we check if the corresponding data actually exist via (?), if so then extract what we need
                            name: place?.name,
                            rating: place?.rating,
                            totalRatings: place?.user_ratings_total,
                            formattedAddress: place?.formatted_address,
                            formattedPhone: place?.formatted_phone_number,
                            price: place?.price_level ?? 1, // Set price to 1 if it's undefined
                            website: place?.website,
                            maps: place?.url,
                            openingHours: place.opening_hours?.weekday_text[days[dayOfWeek]],
                            picture: place?.photos[0],
                            latitude: place?.geometry?.location.lat(),
                            longitude: place?.geometry?.location.lng(),
                        }));
                        // Some information logging and error handling
                        console.log(extractedResults);
                        resolve(extractedResults);
                    } catch (error) {
                        console.error("something wrong with fetch" + error);
                    }
                })();
            } else {
                reject(new Error("Places API request failed"));
            }
        });
    });
}

/**
 * fetchAllDetails() fetches the details of multiple places based on an array of results containing place IDs.
 * It uses fetchDetails for each place and returns the details wehn all results have been fetched.
 *
 * @param {Array} results - Array of all the places
 * @param {Array} detailed_results
 * @param {Object} service - Service object to interact with google maps API
 * @returns {Promise} - Returns a promise with all of the detailed results
 */
async function fetchAllDetails(results, detailed_results, service) {
    try {
        const detailPromises = results.map((result) =>
            fetchDetails(result.place_id, service)
        );
        const detailedResponses = await Promise.all(detailPromises);
        console.log(detailedResponses);
        console.log(detailed_results.length);
        return detailedResponses;
    } catch (error) {
        console.error(error);
    }
}

/**
 * fetchDetails() gets the details of a specific place based on its placeId.
 *
 * @param {string} placeId -> ID of a specific place
 * @param {Object} service -> Service object to interact with the API
 * @returns {Promise} With the specific details of a place
 */
async function fetchDetails(placeId, service) {
    return new Promise((resolve, reject) => {
        service.getDetails({placeId}, (result, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                resolve(result);
            } else {
                reject(new Error("Place details request failed"));
            }
        });
    });
}

export {getResults};
