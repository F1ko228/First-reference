"use strict";

function filterRangeInPlace(array, a, b) {
    for(let i = 0; i < array.length; i++) {
        if(i >= a && i <=b) {
            array.splice(i, 1);
        }
    }
};

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);

alert(arr); 