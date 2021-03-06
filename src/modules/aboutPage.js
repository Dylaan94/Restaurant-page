let aboutPageTest = () => {
    console.log("About Page running")
}

let loadAboutPage = () => {
    let divArray = ['aboutTitle', 'aboutText',];
    let otherContent = document.getElementById('otherContent');
    otherContent.innerHTML = "";

    for (let i = 0; i < divArray.length; i++) {
        let div = document.createElement('div');
        div.className = divArray[i];
        div.id = divArray[i];
        otherContent.appendChild(div)
    }
    console.log(otherContent)
    renderText();
}

let renderText = () => {
    let aboutTitle = document.getElementById('aboutTitle')
    let aboutText = document.getElementById('aboutText');

    aboutTitle.innerHTML = "About Aso's Okonomiyaki"
    aboutText.innerHTML = "Establisehd in 1998, Aso has been serving the people of Onomichi proudbly for over 20 years!"
}

export {aboutPageTest,
        loadAboutPage}