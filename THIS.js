// "use strict"

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum()); 
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//     }
// }
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id; 
//     this.human = true;   
// }
// let ivan = new User('Ivan', 23); // новый экземпляр обьекта!!!!!

function sayName() {
    console.log(this);
    console.log(this.name);
}

const user = {
    name: 'John' 
}

sayName.call(user);
sayName.apply(user);

function count() {
    return this * num;
} 

const double = count.bind(2);
console.log(double(3));

// 1) Оычная функция : this = window, но если стоит  use strict то undefined
// 2) контекст у методов обьекта это сам обьект
// 3) this в конструкторах и класах это новый экземпляр обьекта
// 4) ручная привязка this: call , apply , bind

const btn = document.querySelector('button');


btn.addEventListener('click', function () {
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    satNumber: function () {
        const say = () => {
            console.log(this);
        }
        say();
    }
 
};
obj.sayNumber();

const double = a => a * 2; // если действие помещаеться в одну строку то его можно записывать так и не нужно ставить return и если аргумент только один его можно писать без круглых скобок

console.log(double(4));