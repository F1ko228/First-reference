"use strict";

function sumSalaries(obj) {
    let sum = 0;
    obj = Object.values(obj);
    for(let item of obj) {
      sum += item;
    }
    return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

alert( sumSalaries(salaries) ); // 650

