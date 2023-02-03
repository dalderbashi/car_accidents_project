function setAccidentCategory(category, imgId) {
    const buttons = document.querySelectorAll(`[data-for=${imgId}] [data-accident-category]`)
    for (const button of buttons) {
        if (button.dataset.accidentCategory === category) {
            button.classList.remove("bg-dark", "text-light")
            button.classList.add("bg-primary", "text-white", "shadow")
        } else {
            button.classList.add("bg-dark", "text-light")
            button.classList.remove("bg-primary", "text-white", "shadow")
        }
    }
    document.getElementById(imgId + 'Image').setAttribute('src', `images/${imgId}${category}.png`)
}

function initChartToggle() {
    document.addEventListener('click', event => {
        if (event.target.dataset && event.target.dataset.accidentCategory) {
            const parent = event.target.parentNode
            setAccidentCategory(event.target.dataset.accidentCategory, parent.dataset.for)
        }
    })
}

initChartToggle()

// Creating map object
//var myMap = L.map("accident-map--gmap", {
    //center: [40.7, -73.95],
    //zoom: 4
//});

// Adding tile layer to the map
//L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    //attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    //maxZoom: 18,
    //id: "mapbox.streets",
    //accessToken: API_KEY
//}).addTo(myMap);

//var url = "static/data/maps.json"
    // Grab the data with d3
//d3.json(url, (data) => {
    //console.log(data);
    // Create a new marker cluster group
    //const markers = L.markerClusterGroup();

    // Loop through data
    //data.forEach((accident) => {
        // Check for location property
        // Add marker
        //const marker = L.marker([accident.Start_Lat, accident.Start_Lng])
            //.bindPopup(`${inspection.inspection_date}: ${inspection.result}`);

        //markers.addLayer(marker);

    //});


    // Add our marker cluster layer to the map
    //myMap.addLayer(markers);
//});


// function createMarkers(accidents) {
//     console.log(accidents)


//     // Initialize an array to hold accident markers
//     var accidentMarkers = [];

//     // Loop through the stations array
//     // for (var index = 0; index < accidents.length; index++) {
//     //     var accident = accidents[index];
//     for (var index = 0; index < 10000; index++) {
//         var accident = accidents[index];

//         // For each station, create a marker and bind a popup with the station's name
//         var accidentMarker = L.marker([accident.Start_Lat, accident.Start_Lng])
//             //.bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "<h3>");

//         // Add the marker to the bikeMarkers array
//         accidentMarkers.push(accidentMarker);
//     }

//     // Create a layer group made from the bike markers array, pass it into the createMap function
//     createMap(L.layerGroup(accidentMarkers));
// }


// // Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
// d3.json("static/data/maps.json", createMarkers

// );