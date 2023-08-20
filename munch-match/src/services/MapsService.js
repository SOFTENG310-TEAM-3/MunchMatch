import React from "react";
//Creates the google map variable
const google = window.google;

function getResults(queryType, lat, lng) {
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
        let detailed_results = [];

        async function fetchDetails(placeId) {
          return new Promise((resolve, reject) => {
            service.getDetails({ placeId }, (result, status) => {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                resolve(result);
              } else {
                reject(new Error("Place details request failed"));
              }
            });
          });
        }

        async function fetchAllDetails(results) {
          try {
            const detailPromises = results.map((result) =>
              fetchDetails(result.place_id)
            );
            const detailedResponses = await Promise.all(detailPromises);
            detailed_results = detailedResponses;
            console.log(detailed_results);
            console.log(detailed_results.length);
          } catch (error) {
            console.error(error);
          }
        }
        let extractedResults = [];
        (async () => {
          try {
            await fetchAllDetails(results);
            // Code to run after fetchAllDetails has completed
            console.log("All details fetched and processed.");
            const today = new Date();
            const dayOfWeek = today.getDay();
            extractedResults = detailed_results.slice(0, 6).map((place) => ({
              name: place?.name,
              rating: place?.rating,
              totalRatings: place?.user_ratings_total,
              formattedAddress: place?.formatted_address,
              formattedPhone: place?.formatted_phone_number,
              price: place?.price_level,
              website: place?.website,
              maps: place?.url,
              openingHours: place.opening_hours?.weekday_text[dayOfWeek],
              picture: place?.photos[0],
              latitude: place?.geometry?.location.lat(),
              longitude: place?.geometry?.location.lng(),
            }));
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

export { getResults };
