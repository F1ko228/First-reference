"use strict";

function Accumulator(startingValue) {
    if (!new.target) {
        return new Accumulator(value_2);
    }
    this.value = startingValue;
    this.read = function() {
        this.meaning = +prompt("Введите значение", "");
        this.value = this.value + this.meaning;
        return this.value;
    }
};

let value_2 = +prompt("Введите значение", "");

let accumulator = new Accumulator(value_2);

accumulator.read();

alert(`Сумма всех чисел равна ${accumulator.value}`);

   



