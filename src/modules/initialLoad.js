// webpack tests
let pageLoadTest = () => {
    console.log("pageLoad runs look");
}

// variables
let contentDiv = document.getElementById('content');
let div;
let list;
let divArray = ["header", "title", "otherContent"]
let tabArray = ["about", "menu", "contact"]

let pageLoad = () => {
    for (let i = 0; i < divArray.length; i++) {
        div = document.createElement('div');
        div.className = divArray[i];
        div.id = divArray[i];
        contentDiv.appendChild(div);
    }

    console.log(contentDiv);

    let header = document.getElementById('header')
    let title = document.getElementById('title')
    let otherContent = document.getElementById('otherContent')

    header.innerHTML = 'header';
    title.innerHTML = "Aso's Okonomiyaki";
    otherContent.innerHTML = 'Other stuff here'
}

let tabLoad = () => {
    for (let i = 0; i < tabArray.length; i++) {
       list = document.createElement('li')
       list.className = tabArray[i];
       list.id = tabArray[i];
       list.innerHTML = tabArray[i];
       header.appendChild(list);
    }
    
}

export {pageLoadTest,
        pageLoad,
        tabLoad}



        // read about dom creating global variables and work out how to NOT use them