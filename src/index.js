
console.log("test")

import {pageLoadTest, pageLoad, tabLoad} from './modules/initialLoad';

import {aboutPageTest, loadAboutPage} from './modules/aboutPage';
import {menuPageTest, loadMenuPage} from './modules/menuPage';
import {contactPageTest, loadContactPage} from './modules/contactPage'

pageLoadTest();
pageLoad();
tabLoad();

let aboutBtn = document.getElementById('about')
let menuBtn = document.getElementById('menu')
let contactBtn = document.getElementById('contact')


aboutBtn.addEventListener("click", () => {
    aboutPageTest();
    loadAboutPage();
})

menuBtn.addEventListener("click", () => {
    menuPageTest();
    loadMenuPage();
})

contactBtn.addEventListener("click", () => {
    contactPageTest();
    loadContactPage();
})

// accessing the first module and then the console logs that it is not defined.
// managed to get it to work by accessing them as functions directly??

// need to workout why webpack keeps freezing terminal

// Why are my variables in initialLoad working without declaring them