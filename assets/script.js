"use strict";

function filterRange(array, a, b) {
    let arrInFn = [];
    for(let i of array) {
        if(i >= a && i <=b) {
            arrInFn.unshift(i);
        }
        else {
            continue;
        }
    }
    return arrInFn;
};

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert(filtered); 
alert(arr); 