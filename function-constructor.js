"use strict"

const num = new Number(3); // если такая функция будет содержать и методы и свойства то она создаст новый обьект

function User(name, id) {
    this.name = name;
    this.id = id; // тут мы укажем что у каждого пользователя будет свой уникальный идентефикатор который мы ему зададим во время создания нашего пользователя
    this.human = true; // каждый пользователь будет человеком
    this.hello = function () { //так же кроме свойств мы в функцию можем помещать методы
        console.log(`Hello ${this.name}`)
    }; 
}

User.prototype.exit = function (name) {
    console.log(`Пользователь ${this.name} ушёел`);
}

const ivan = new User('Ivan', 28);

ivan.hello();
ivan.exit();
