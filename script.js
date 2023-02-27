'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genre: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
   
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
   },
   remenberMyFilms:function (){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцените его?', '');

              if (a != '' && b != '' && a.length < 50 && a != null && b != null){
                personalMovieDB.movies[a] = b;
                console.log('done!');
              } else {console.log('error');
              i--;
            }
        }
 },
 detectPersonalLevel: function(){
    if (personalMovieDB.count < 10){
        console.log('Просмотренно мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Классический зритель');
    } else if (personalMovieDB.count >= 30){
        console.log('Киноман');
    } else {console.log('Error');}
},
showMyDB: function (){
    if (personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
},
toggleVisibleMyDB:function(){
    if (personalMovieDB.privat){
        personalMovieDB.privat === false;
    } else{
        personalMovieDB.privat === true;
    }
},
writeYourGenres: function (){
        for (let i = 0; i <3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);

            if (genre == '' || genre == null){
                console.log('Вы ввели некоректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genre[i] = genre;
            }
        }
        personalMovieDB.genre.forEach((item, i) => {
            console.log(`Любимый жанр# ${i + 1} - это ${item}`);
        });
},
};

