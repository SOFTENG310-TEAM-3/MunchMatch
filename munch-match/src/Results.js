

const google = window.google
//Using a local variable in a created .env file to store the key. Either contact us for the key or create one with google making sure that you have access to the Places API
const key = process.env.REACT_APP_GOOGLE_API_KEY

function getResults(props){
    //Stores the user's location as google.maps.LatLng (Latitude and Longitude)
    //Change location variables to props variables
    const userLocation = new google.maps.LatLng(-36.8594224, 174.5413159)

   //The parameters for requesting nearby locations for places to eat
    let request = {
        //Change query to button input
        query: "Pizza",
        location: userLocation,
        //Distance from userLocation which is in metrers
        radius: 5000,
        openNow: true,
        type:"restaurant",
    }
    //Creates the variable on where it will store the output of the requested data should be
    let service = new google.maps.places.PlacesService(document.createElement('div'));

    //Gets the data and retrieves the data to the callback function 
    service.textSearch(request, callback);


}

//Displays the data gotten from the API
function callback(results, status){
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < 6; i++) {
        //To check for output run the program and open use inspect element and then go to the console tab
          console.log(results[i])
        }
      }
}


//The result page layout
const ResultsPage = () =>  {
    return(
        //Runs the Google Places API
        <div>   
            <h1>Result Page</h1>
            {getResults()}
            
        </div>
    );

}

export default ResultsPage;