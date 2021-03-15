"use strict";


let number0fFilms=+prompt('Сколько фильмов вы уже посмотрели?','');


const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних посмотренных фильмов?',''),
    b = prompt('На сколкьо оцените его?',''),
    c = prompt('Один из последних посмотренных фильмов?',''),
    d = prompt('На сколкьо оцените его?','');


    

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);