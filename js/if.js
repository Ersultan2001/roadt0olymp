"use strict";


if (4){
    console.log('Ok');
}else{
    console.log('error');
}

// if(num < 49){
//     console.log('error');
// }else if (num > 100){
//     console.log('Много');
// }else{
//     console.log('ОК');
// }

// (num === 50) ?   console.log('ОК') : console.log('error');


const num = '50';

switch(num){ 
    case '49':
        console.log('Мало');
    break;
    case '100':
        console.log('Много');
    break;
    case '50':
    console.log('Верно');
    break;

    default:
        console.log('Не в этот раз');
        break;
}