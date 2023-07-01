"use strict";

function sumInput(arr) {
    let sum = 0;
    while(true) {
        let meaning = prompt("Введите элемент для массива","");
        if(meaning == "" || meaning == null || !isFinite(meaning)) {
            break;
        }
        arr.push(+meaning);
    }

    for(let item of arr) {
        sum += item;
    };
    return sum;
};

let array = [];

alert(sumInput(array));