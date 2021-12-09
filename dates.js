"use strict"

// const now = new Date();

// console.log(now);

// const now = new Date(2020, 5 ,1, 20);

// console.log(now);

const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime()); можно обратно превратить в дату если поместить внутрь new Date()

let start = new Date(); // начало работы скрипта

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date(); // конец после того как цикл выполнен

alert(`цикл отрработал за ${end - start} миллесекунд`);
 

