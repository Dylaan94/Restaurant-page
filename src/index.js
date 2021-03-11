import {pageLoad} from './modules/initialLoad';
import {loadAboutPage} from './modules/aboutPage';
import {loadMenuPage} from './modules/menuPage';
import {loadContactPage} from './modules/contactPage'

// init page
pageLoad();

let clearNodes = () => {
    let otherContent = document.getElementById('otherContent')
    // removes nodes from last to first
    // while otherContent has nodes, this will run
    while (otherContent.lastElementChild) {
        otherContent.removeChild(otherContent.lastElementChild);
    }
}

// add tab functionality
let aboutBtn = document.getElementById('about')
let menuBtn = document.getElementById('menu')
let contactBtn = document.getElementById('contact')
let logoBtn = document.getElementById('logo');

aboutBtn.addEventListener("click", () => {
    clearNodes();
    aboutPageTest();
    loadAboutPage();
})

menuBtn.addEventListener("click", () => {
    clearNodes();
    menuPageTest();
    loadMenuPage();
})

contactBtn.addEventListener("click", () => {
    clearNodes();
    contactPageTest();
    loadContactPage();
})

logoBtn.addEventListener("click", () => {
    clearNodes();
})