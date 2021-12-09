"use strict"

class Recatangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class CloredRectangleWithText extends Recatangle{ // мы наследуем класс  Recatangle тоесть мы берём его свойства и методы и предаём 
    constructor(height, width, text, bgColor) {
        super(height, width);                                  // забирает все свойства и методы у родителя
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет:${this.bgColor}`)
    }
}


const div = new CloredRectangleWithText(25, 10, 'hello', 'red');

div.showMyProps();
console.log(div.calcArea());
// const square = new Recatangle(10, 10);
// const long = new Recatangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());