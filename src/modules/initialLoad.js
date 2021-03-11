let pageLoad = () => {
// variables
let contentDiv = document.getElementById('content');
let divArray = ["header", "title", "otherContent", "footer"]

    // for loop to dynamically create divs
    for (let i = 0; i < divArray.length; i++) {
        let div = document.createElement('div');
        div.className = divArray[i];
        div.id = divArray[i];
        contentDiv.appendChild(div);
    }
    console.log(contentDiv);

    // variables for styling
    let header = document.getElementById('header')
    let title = document.getElementById('title')
    let otherContent = document.getElementById('otherContent')
    let footer = document.getElementById('footer')

    //title
    title.innerHTML = "aso's okonomiyaki";
    
    //footer
    footer.innerHTML = 'Technologies used: HTML, CSS, Javascript, Webkit, Google Maps API'

    //create tab
    tabLoad();
}

let tabLoad = () => {
    // create tab elements
    let tabArray = ["logo", "about", "menu", "contact"]

    for (let i = 0; i < tabArray.length; i++) {
       let list = document.createElement('li')
       list.className = tabArray[i];
       list.id = tabArray[i];
       list.innerHTML = tabArray[i];
       header.appendChild(list);
    }

    // add clipart to logo list item
    let logoBtn = document.getElementById('logo');
    // remove text
    logoBtn.innerHTML = "";

    //create okonomiyakiClipart
    let okonomiyakiClipart = document.createElement('img')
    okonomiyakiClipart.src = "https://2.bp.blogspot.com/-OXYLWw2IV6A/WGCxTlg140I/AAAAAAABAqM/NsIzwDF0vSoUJMaX101Cs87_iOzWMGAYgCLcB/s800/omatsuri_okonomiyaki.png";
    okonomiyakiClipart.id = 'okonomiyakiClipart'
    okonomiyakiClipart.className = 'okonomiyakiClipart'

    logoBtn.appendChild(okonomiyakiClipart);
}

export {pageLoad}
