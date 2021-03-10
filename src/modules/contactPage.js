let contactPageTest = () => {
    console.log("Contact page running")
}

let loadContactPage = () => {
    let otherContent = document.getElementById('otherContent');
    // create new divs
    let divArray = ['contactTitle', 'contactContainer']

    for (let i = 0; i < divArray.length; i++) {
        let div = document.createElement('div');
        div.id = divArray[i];
        div.className = divArray[i];
        otherContent.appendChild(div);
    }

    // assign new divs
    let contactTitle = document.getElementById('contactTitle');
    let contactContainer = document.getElementById('contactContainer');

    // add 2 new divs to contactContainer
    let containerArr = ["contactDiv", "googleDiv"]

    for (let i = 0; i < containerArr.length; i++) {
        let div = document.createElement('div');
        div.id = containerArr[i];
        div.className = containerArr[i];
        contactContainer.appendChild(div)
    }

    console.log(otherContent)

    renderOtherContent(contactTitle, contactContainer);
}

let renderOtherContent = () => {
    // assign new divs 
    let contactDiv = document.getElementById('contactDiv')
    let googleDiv = document.getElementById('googleDiv')

    // style title
    contactTitle.innerHTML = 'Contact'

    // add text
    contactDiv.innerHTML = "<p><b> Name: </b> Aso's Okonomiyaki</p> " 
                         + "<p><b> Address: </b> Hiroshima Prefecture, Onomichi City 123456</p>"
                         + "<p><b> Contact: </b> 123-456-7890 </p>"

    googleDiv.innerHTML = "Google Maps" 

    // create variables for Google Maps API
    let map = document.createElement('div')
    map.id = 'map'
    googleDiv.appendChild(map);

    // call map
    initMap();
}

// Initialize and add the map
function initMap() {
    // The location of Aso
    const asoOkonomiyaki = { lat: 34.40138, lng: 133.180840 };
    // The map, centered at Aso
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13, // zooms between 0-19
      center: asoOkonomiyaki,
    });
    // The marker, positioned at Aso
    const marker = new google.maps.Marker({
      position: asoOkonomiyaki,
      map: map,
    });
  }

export {contactPageTest,
        loadContactPage};