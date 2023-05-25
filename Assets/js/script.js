const baseUrl = "https://gateway.marvel.com:443/v1/public";
const publicApiKey = "9c05fc86625991334d71ba90df3a516b";
const privateApiKey = "5dc0104b90f1888efa930dc5c261b93e31cde842";

const hash = generateHash(publicApiKey, privateApiKey);
const comicId = 32477;
let crewList;
let crewVIew = document.getElementById("crew");
listBox = document.getElementById("stones-");

function generateHash(publicKey, privateKey) {
    const input = "1" + privateKey + publicKey;
    const hash = CryptoJS.MD5(input).toString();

    return hash;
}

function getAllCharacters(){
    fetch(`${baseUrl}/comics/${comicId}/characters?ts=1&apikey=${publicApiKey}&hash=${hash}&limit=100`)
    .then(function(response) {
        // Check if the response was successful
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(function(data) {
        crewList = data.data.results;
        Array(crewList)[0].forEach(x=>{
            console.log(" val  : ",x);
            let url = x.thumbnail.path +"."+x.thumbnail.extension;
            template = charaterTemplate(x.name,url,x.description);
            console.log(template);
            crewVIew.innerHTML+= template;
        })

    })
      .catch(function(error) {
        console.log(error);
      });

}

function getAllStones(){
    Object.keys(infinityStones).forEach((name)=>{
        document.getElementById("location").innerHTML+=stoneTemplate(name,
            "Assets/img/"+(Object.keys(infinityStones).indexOf(name)+1)+".png"
            ,stonesDescriptions[Object.keys(infinityStones).indexOf(name)]);
    });
}

getAllCharacters();
getAllStones();

var instance = M.Tabs.init(document.getElementById("Tab"),
{duration:200});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  });

listBox.addEventListener("change", ()=>{
    if (listBox.value=="1"){
        console.log("done");
        map.setView([51.505, -0.09],2);
    }else{
        goto( infinityStones[listBox.value],listBox.value);
    }

});

var nearbyCoordinates = Object.values(infinityStones).map(function(coordinate) {
    var nearbyLatitude = coordinate[0] + Math.random() * 0.02 - 0.01;
    var nearbyLongitude = coordinate[1] + Math.random() * 0.02 - 0.01;
    return [nearbyLatitude, nearbyLongitude];
});

var cards = document.querySelectorAll(".stone.activator");
cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.click();;
       ;
    });

  });