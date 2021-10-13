let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

     }


}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};







function remebreMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотреных фильмов?', ''),
              b = prompt('На сколько оцените его?', ''); 
              
              if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
                personalMovieDB.movies[a] = b; 
    
                console.log('Done');
              } else {
                  console.log('error');
                  i--;
              }
    
        
    }
}

remebreMyFilms();

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');

}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы кдассический зритель');
}else if (personalMovieDB.count >= 30){
    console.log('Вы киноман!!!')
}else {
    console.log('Произошла ошибка')
}

console.log(personalMovieDB);

"use string"

// alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);


//const answer = prompt("Вам есть 18?", "")
//console.log(typeof(answer));

const answers = []

//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Ваша фамилия?', '');
//answers[3] = prompt('сколько вам лет?', '');


console.log(typeof(answers));



"use strict"


const category = 'toys';
console.log(`http://someurl.com/${category}/5`);  

const user = "Ivan"

alert(`Привет, ${user}`);