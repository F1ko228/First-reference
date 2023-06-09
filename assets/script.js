"use strict";

function Calculator() {
    this.read = function() {
        this.meaning_1 = +prompt('Введите первое значение', "");
        this.meaning_2 = +prompt('Введите второе значение', "");
    };

    this.sum = function() {
        return this.meaning_1 + this.meaning_2;
    };

    this.mul = function() {
        return this.meaning_1 * this.meaning_2;
    };
};


let calculator = new Calculator();
calculator.read();

alert( `Сумма чисел ${calculator.meaning_1} и ${calculator.meaning_2} равна ` + calculator.sum() );
alert( `Произведение чисел ${calculator.meaning_1} и ${calculator.meaning_2} равно ` + calculator.mul() );

