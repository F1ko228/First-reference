"use strict";

function unique(arr) {
  let array = [];
  let set = new Set(arr);
  for(let value of set) {
    array.push(value)
  }
  return array;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); 