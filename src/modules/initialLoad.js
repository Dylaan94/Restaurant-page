let pageLoadTest = () => {
    console.log("pageLoad runs look");
}

let contentDiv = document.getElementById('content');
console.log(contentDiv)
let div;
let divArray = ["header", "title", "otherContent"]

let pageLoad = () => {
    for (let i = 0; i < divArray.length; i++) {
        div = document.createElement('div');
        div.className = divArray[i];
        div.id = "div" + i;
        contentDiv.appendChild(div);
    }

    console.log(contentDiv);
//     let headerDiv = div;
//     headerDiv.class = 'header';
//     headerDiv.innerHTML = 'Header';
//     contentDiv.appendChild(headerDiv);

//     let titleDiv = div;
//     titleDiv.class = 'title';
//     titleDiv.innerHTML = 'Title';
//     contentDiv.appendChild(titleDiv)
}

export {pageLoadTest,
        pageLoad}