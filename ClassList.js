"use strict"


const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList.length); 

// console.log(btns[0].classList.item()); // позволяет нам получить класс который рассполагаеться по определённым индексом

// console.log(btns[0].classList.add('red')); // позволяет добавлять класс

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {     // при клике на первую конпку 
//     if (!btns[1].classList.contains('red')) {  // проверяем есть ли у второй кнопки класс ред
//         btns[1].classList.add('red');          // если условие выполнено то добвляем класс 
//     } else {
//         btns[1].classList.remove('red');       // если условие не выполнено то удаляем класс ред
//     }
// });
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('hello');
    }
});