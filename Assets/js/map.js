infinityStones={
    space: [42, -74],
    power: [-16, -68],
    reality: [13, -72],
    soul: [27, 78],
    time: [51, -1],
    mind: [42, -71]
}
const leafMapUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"

const map = L.map('map').setView([51.505, -0.09], 13);

const tiles = L.tileLayer(`${leafMapUrl}`, {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function goto(coordinates,Name){
    var marker = L.marker(coordinates).addTo(map);
    var popupContent = `${Name}`;
    var popup = L.popup().setContent(popupContent);

// Bind the popup to the marker
marker.bindPopup(popup).openPopup();

    map.setView(coordinates,15)
}



