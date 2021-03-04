
console.log("test")

import {nextLoad} from './modules/nextLoad';
import {pageLoadTest} from './modules/initialLoad';
import {pageLoad} from './modules/initialLoad';


nextLoad();
pageLoadTest();
pageLoad();

// accessing the first module and then the console logs that it is not defined.
// managed to get it to work by accessing them as functions directly??

// need to workout why webpack keeps freezing terminal