
console.log("test")

import {pageLoadTest, pageLoad, tabLoad} from './modules/initialLoad';

import {aboutPageTest} from './modules/aboutPage';
import {menuPageTest} from './modules/menuPage';
import {contactPageTest} from './modules/contactPage'


pageLoadTest();
pageLoad();
tabLoad();

console.log(header)
console.log(title)
console.log(about)

let aboutBtn = document.getElementById('about')
let menuBtn = document.getElementById('menu')
let contactBtn = document.getElementById('contact')

aboutBtn.addEventListener("click", () => {
    aboutPageTest();
})

menuBtn.addEventListener("click", () => {
    menuPageTest();
})

contactBtn.addEventListener("click", () => {
    contactPageTest();
})

// accessing the first module and then the console logs that it is not defined.
// managed to get it to work by accessing them as functions directly??

// need to workout why webpack keeps freezing terminal

// Why are my variables in initialLoad working without declaring them