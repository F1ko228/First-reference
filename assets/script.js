"use strict";

function camelize(str) {
    let strInFn = str.split('');
    alert(strInFn);
    let indexValue;
    while (indexValue != '-1') {
        indexValue = strInFn.indexOf('-');
        if(indexValue == '-1') break;
        alert(indexValue);
        strInFn.splice(indexValue, 2, strInFn[indexValue + 1].toUpperCase());
        alert(strInFn);
    }; 
    // indexValue = strInFn.indexOf('-');
    // alert(indexValue);
    // strInFn.splice(indexValue, 2, strInFn[indexValue + 1].toUpperCase());
    // alert(strInFn);
    // if(strInFn.indexOf('-') >= 0) {
    //     camelize(strInFn)   
    // };
    return strInFn.join('');
};

alert(camelize("backgound-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));

