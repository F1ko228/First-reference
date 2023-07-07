"use strict";

function copySorted(array) {
    let arrayInFn = []; 
    for(let i of array) {
        arrayInFn.unshift(i)
    };
    arrayInFn = arrayInFn.sort( (a, b) => a.localeCompare(b) );
    return arrayInFn;
};

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert( sorted ); 
alert( arr ); 

