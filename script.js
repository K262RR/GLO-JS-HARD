/*******************************************
    Lesson 3
*******************************************/
// const lang = prompt('На каком языке отобразить информацию: ru / en ? ')
const lang = 'ru';
const langArray = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}

// Задание 1
if (lang.toLowerCase() == 'ru') {
    console.log(langArray.ru);
} else if (lang.toLowerCase() == 'en') {
    console.log(langArray.en);
} else {
    console.log('Выберите язык из списка');
}

switch(lang.toLowerCase()) {
    case 'ru': 
        console.log(langArray.ru);
        break;
    case 'en':  
        console.log(langArray.en);
        break;
    default:
        console.log('Выберите язык из списка');
        break;
}

console.log(langArray[lang.toLowerCase()]);

// Задание 2
const namePerson = 'Александр';

const nameResult = namePerson == 'Артем'
    ? 'Директор' 
    : namePerson == 'Александр'
    ? 'Преподаватель'
    : 'Студент'

console.log(nameResult);

/*******************************************
    Lesson 2
*******************************************/
const num = 266219;
const numsArray = num.toString().split('');

let sum = parseInt(numsArray[0]);
for (let i=1; i < numsArray.length; i++) {
    sum *= parseInt(numsArray[i]);
}
sum **= 3;

console.log( sum.toString().substring(0, 2) );