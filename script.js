'use strict';
let numberOfFilms;
let genres;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     }
}
// start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    function remenberMyFilms(){
        for (let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
                  if (a != '' && b != '' && a.length < 50 && a != null && b != null){
                    personalMovieDB.movies[a] = b;
                    console.log('done!');
                  } else {console.log('error');
                  i--;
                }
            }
    }
    // remenberMyFilms();

    function detectPersonalLevel(){
        if (personalMovieDB.count < 10){
            console.log('Просмотренно мало');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Классический зритель');
        } else if (personalMovieDB.count >= 30){
            console.log('Киноман');
        } else {console.log('Error');}
    }
    // detectPersonalLevel();

    function showMyDB (){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    }
    showMyDB(personalMovieDB.privat);

    function writeYourGenres (){
        for (let i = 1; i <= 3; i++){
            const genre =prompt(`Ваш любмиый жанр под номером ${(i)}`);
            personalMovieDB.genres[i] = genre;
        }
    }
    writeYourGenres();
    
    // console.log(personalMovieDB);