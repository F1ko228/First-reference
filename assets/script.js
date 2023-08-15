"use strict";

function getAverageAge(array) {
  let countAge = 0;
  let countUsers = 0;
  for(let i = 0; i < array.length; i++) {
    if(true) countUsers++;
  }
  array.map(user => countAge+= user.age);
  let averageAge = countAge/countUsers;
  if(countAge%countUsers !== 0) return averageAge.toFixed(1);
  return averageAge;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert(getAverageAge(arr)); 