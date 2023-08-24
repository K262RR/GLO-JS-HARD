/*******************************************
    Lesson 5
*******************************************/
const lesson05_2 = () => {
    const arr = ['1234', '254', '3674', '4987', '5123', '69', '777'];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0) == '2' || arr[i].charAt(0) == '4') {
            console.log(arr[i]);
        }
    }

    for (let i = 1; i < 101; i++) {
        
        let count = 0
        
        for (let j = 1; j <= i; j++) {
            if ((i % j) == 0) {
                count++
            }
        }
        
        if (count == 2) {
            console.log(`Делители числа ${i}: 1 и ${i}`);
        }
    }

}
lesson05();

/*******************************************
    Lesson 4
*******************************************/
const lesson04 = () => {
    const isItString = (data) => {
        if (typeof(data) !== 'string') {
            return console.log('Это не строка!');
        }
        
        data = data.trim();
        
        if (data.length > 30) {
            data = data.substr(0,30);
            console.log(data + '...');
        } else {
            console.log(data);
        }
    }

    isItString('Чё ты братишка, как дела? Как семья? Как родные? Есть 3000 до зарплаты?');
    isItString('Вроде все ок!');
    isItString(123);


}
// lesson04();

/*******************************************
    Lesson 3
*******************************************/
const lesson03 = () => {
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
}
// lesson03()

/*******************************************
    Lesson 2
*******************************************/
const lesson02 = () => {
    const num = 266219;
    const numsArray = num.toString().split('');
    
    let sum = parseInt(numsArray[0]);
    for (let i=1; i < numsArray.length; i++) {
        sum *= parseInt(numsArray[i]);
    }
    sum **= 3;
    
    console.log( sum.toString().substring(0, 2) );
}
// lesson02();
