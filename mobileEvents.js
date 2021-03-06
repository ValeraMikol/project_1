"use strict"

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        event.preventDefault();

        console.log('start');
        console.log(e.touches);
    });
    box.addEventListener('touchmove', (e) => {
        event.preventDefault();

        console.log('move');
    });
    box.addEventListener('touchend', (e) => {
        event.preventDefault();

        console.log('end');
    });
});