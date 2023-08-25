"use strict";

function getLastDayOfMonth() {
  let date = new Date()
  return 3600 * date.getHours() + 60 * date.getMinutes() +  date.getSeconds();
}


alert( getLastDayOfMonth() )