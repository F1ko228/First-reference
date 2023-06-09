"use strict";

function User(name) {
    this.name = name;
    if (!new.target) {
        return new User(name);
    };
};

let nikita = new User('Nikita');

alert(nikita.name);



