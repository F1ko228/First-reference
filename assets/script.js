"use strict";

function sumTo(end) {
  if (end === 1) return end;
  else {
    return end + sumTo(end - 1)
  }
}

alert(sumTo(100));