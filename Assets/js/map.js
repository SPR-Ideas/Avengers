infinityStones={
    space: [42, -74],
    power: [-16, -68],
    reality: [13, -72],
    soul: [27, 78],
    time: [51, -1],
    mind: [22, -51]
}
const leafMapUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"

const map = L.map('map').setView([51.505, -0.09], 2);

const tiles = L.tileLayer(`${leafMapUrl}`, {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function setLocations(coordinates,Name){
    var popupContent = `${Name.charAt(0).toUpperCase()}${Name.slice(1)} Stone`;

    var iconUrl = "Assets/img/" + (Object.keys(infinityStones).indexOf(Name)+1) +".png";
    var iconSize = [50, 50]; // Set the width and height of the icon image

// Create a custom icon using the image
var customIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: iconSize
});

// Create a marker with the custom icon at the specified coordinates
var marker = L.marker(coordinates, { icon: customIcon }).addTo(map);



    var popup = L.popup().setContent(popupContent);
    // Bind the popup to the marker
    marker.bindPopup(popup).openPopup();
}

Object.keys(infinityStones).forEach((stone)=>{
    setLocations( infinityStones[stone],stone);
})

function goto(coordinates,Name){
    // var marker = L.marker(coordinates).addTo(map);
    var popupContent = `${Name.charAt(0).toUpperCase()}${Name.slice(1)} Stone`;

    var iconUrl = "Assets/img/" + (Object.keys(infinityStones).indexOf(Name)+1) +".png";
    var iconSize = [50, 50]; // Set the width and height of the icon image

// Create a custom icon using the image
var customIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: iconSize
});

// Create a marker with the custom icon at the specified coordinates
var marker = L.marker(coordinates, { icon: customIcon }).addTo(map);



    var popup = L.popup().setContent(popupContent);
    // Bind the popup to the marker
    marker.bindPopup(popup).openPopup();

    map.setView(coordinates,15);
}



