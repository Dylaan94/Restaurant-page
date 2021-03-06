// webpack tests
let pageLoadTest = () => {
    console.log("pageLoad runs look");
}

// variables
let contentDiv = document.getElementById('content');
let divArray = ["header", "title", "otherContent", "footer"]
let tabArray = ["about", "menu", "contact"]

let pageLoad = () => {
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

    //header
    header.innerHTML = 'header';

    //title
    title.innerHTML = "Aso's Okonomiyaki";

    //other content
    // otherContent.innerHTML = 'Other stuff here' commented out to prevent memory leak
    
    //footer
    footer.innerHTML = 'Technologies used: HTML CSS Javascript Webkit'
}



let tabLoad = () => {
    for (let i = 0; i < tabArray.length; i++) {
       let list = document.createElement('li')
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
        // look at creating just one single function to export from each module