"use strict";

function truncate(str, maxlength) {
    if (str == null) {
        alert("Вы не ввели строчку, пожалуйста, повторите попытку");
    };
    if (str.length <= maxlength) {
        return str;
    };
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 1);
        str = str + "...";
        return str;
    };
}

alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) ); 
alert( truncate("Всем привет!", 20) );
   



