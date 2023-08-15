"use strict";

function shuffle(array) {
  for(let i = array.lenght - 1; i > 0; i--) {
    let j = Math.floor(Math.random * (i + 1));
    [array[i], array[j]] = [array[i], array[j]];
  }
}

let count = {
  "123": 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0,
};

for(let i = 0; i < 1000; i++) {
  let arr = [1, 2, 3];
  shuffle(arr);
  count[arr.join("")]++;
}

for(let key in count) {
  alert(`${key}: ${count[key]}`)
};

