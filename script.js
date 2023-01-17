// 1.

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 2.

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 3.

let answer0 = prompt('Один из последних просмотренных фильмов?','');
let answer1 = prompt('На сколько его оценили?','');
let answer2 = prompt('Один из последних просмотренных фильмов?','');
let answer3 = prompt('На сколько его оценили?','');

personalMovieDB.movies[answer0]=answer1;
personalMovieDB.movies[answer2]=answer3;  

console.log(personalMovieDB);