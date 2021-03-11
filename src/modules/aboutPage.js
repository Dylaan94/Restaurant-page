let loadAboutPage = () => {
    // dynamically create divs based off array
    let divArray = ['aboutTitle', 'aboutText', 'onomichiyakiTitle', 'onomichiyakiAbout'];
    let otherContent = document.getElementById('otherContent');

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
    let onomichiyakiTitle = document.getElementById('onomichiyakiTitle')
    let onomichiyakiAbout = document.getElementById('onomichiyakiAbout')
    
    // add text
    aboutTitle.innerHTML = "About Aso's Okonomiyaki"
    aboutText.innerHTML = "Established in 1998, Aso has been serving the people of Onomichi proudly for over 20 years!"
                        + " come in any time to try our delicious Onomichi Style Okonomiyaki"

    onomichiyakiTitle.innerHTML = "What is Onomichiyaki?"
    onomichiyakiAbout.innerHTML = "Influenced by both Hiroshima and Fuchu style Okonomiyaki "
                                + "Onomichiyaki merges the Hiroshima style of layered noodles, cabbage and meat"
                                + "whilst using Onomichi's local seafood to create a unique flavour"
                                + "the Okonomiyaki is finally fried until the noodles are beautifully crispy; a technique borrowed from Fuchu."
}

export {loadAboutPage}