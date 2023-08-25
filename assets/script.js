"use strict";

function getWeekDay(date) {
  let day = date.getDay();
  if(day == 0) return "ВС"
  if(day == 1) return "ПН"
  if(day == 2) return "ВТ"
  if(day == 3) return "СР"
  if(day == 4) return "ЧТ"
  if(day == 5) return "ПТ"
  if(day == 6) return "СБ"
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"