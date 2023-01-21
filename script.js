'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10){
    console.log('Просмотренно мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Классический зритель');
} else if (personalMovieDB.count >= 30){
    console.log('Киноман');
} else {console.log('Error');}

console.log(personalMovieDB);