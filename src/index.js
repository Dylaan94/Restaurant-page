
console.log("test")

import {nextLoad} from './nextLoad';

import {pageLoad} from './initialLoad';


nextLoad();
pageLoad();

// accessing the first module and then the console logs that it is not defined.
// managed to get it to work by accessing them as functions directly??

// need to workout why webpack keeps freezing terminal