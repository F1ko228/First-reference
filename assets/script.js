"use strict";

let calculator = {
    read() {
        this.meaning_1 = +prompt("Введите значение 1", "");
        this.meaning_2 = +prompt("Введите значение 2", "");
    },
    sum() {
        return this.meaning_1 + this.meaning_2;
    },
    mul() {
        return this.meaning_1 * this.meaning_2;
    },
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


