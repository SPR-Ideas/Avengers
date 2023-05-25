infinityStones={
    space: [42, -74],
    power: [-16, -68],
    reality: [13, -72],
    soul: [27, 78],
    time: [51, -1],
    mind: [-16, 40]
}
stonesDescriptions=[
    "The Space Stone manipulates space, enabling teleportation and creation of portals, allowing instant travel across the universe, and altering spatial dimensions.",
    "The Power Stone harnesses immense energy, enhancing strength and abilities, unleashing devastating power, and amplifying existing powers to an unimaginable level.",
    "The Reality Stone warps reality, creating illusions, reshaping matter, and altering the laws of physics, allowing the user to bend the fabric of existence.",
    "The Soul Stone controls souls, interacting with the living and the deceased, granting power over life and death, and providing profound insights into individuals.",
    "The Time Stone governs time, manipulating its flow, enabling time travel, foreseeing past and future events, and altering the course of history.",
    "The Mind Stone enhances mental abilities, granting telepathy and telekinesis, and enabling control over the minds of others, accessing cosmic knowledge and understanding."
]

alertLocation = [
    [43.001, -75.001],[-17.001, -69.001],
[12.001, -72.001],[27.001, 78.001],[53.001, -2.001],[24.001, -55.001]]

thanosPath = [[10,0],[50,90],[70,-80],[-45,-70],[50,50],
[43.001, -75.001],[-17.001, -69.001],
[12.001, -72.001],[27.001, 78.001],[53.001, -2.001],[24.001, -55.001]
]

var thanos ;
const leafMapUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
var thanosReached = false;
const map = L.map('map').setView([51.505, -0.09], 2);

const tiles = L.tileLayer(`${leafMapUrl}`, {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function markAvenger(coordinates) {
    var popupContent = "Avengers";

    var iconUrl = "Assets/img/avengers.png";
    var iconSize = [50, 50]; // Set the width and height of the icon image


    var customIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: iconSize
    });


    let marker = L.marker(coordinates, { icon: customIcon }).addTo(map);

    var popup = L.popup().setContent(popupContent);
    marker.bindPopup(popup).openPopup();
}


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


function setThanos(coordinates) {
    var popupContent = "Thanos";

    var iconUrl = "Assets/img/thanos.png";
    var iconSize = [50, 50]; // Set the width and height of the icon image


    var customIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: iconSize
    });


    thanos = L.marker(coordinates, { icon: customIcon }).addTo(map);

    var popup = L.popup().setContent(popupContent);
    thanos.bindPopup(popup).openPopup();
}

function movethanos() {
    let radInt = Math.floor(Math.random() * 11);
    if(radInt >= 5){
        coordinates = thanosPath[radInt];
        val = Object.keys(infinityStones)[radInt-5]
        thanos.setLatLng(coordinates);
        thanosReached = true;

        swal({
            title: "Thanos Alert",
            text: `Critical Warning Thanos Reached near ${val}-stone Location ,alert Avengers to stop Thanos`,
            icon: "warning",
            dangerMode: true,
            button: "Alert Avengers",
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Avengers has been sent to the place!", {
                icon: "success",
              });
              markAvenger(infinityStones[val]);
            } else {
              swal("Your imaginary file is safe!");
            }
          });



    }else{
        coordinates = thanosPath[radInt];
        thanos.setLatLng(coordinates);
    }
}
setThanos([15, 20])
async function startThaonsMovement(){
    if(document.getElementById("stones").style.display != "none" && !thanosReached){
        console.log("moved started...");
        movethanos();
    }
    // console.log("Engine Stoped...")
}

setInterval(startThaonsMovement ,5000)
