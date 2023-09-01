let date = new Date();


const getDay = () => {
    switch (date.getDay()) {
        case 1: return 'Понедельник';
        case 2: return 'Вторник';
        case 3: return 'Среда';
        case 4: return 'Четверг';
        case 5: return 'Пятница';
        case 6: return 'Субота';
        case 7: return 'Воскресенье';
    }
}

const getMonth = () => {
    switch (date.getMonth()) {
        case 0: return 'Января';
        case 1: return 'Февраля';
        case 2: return 'Марта';
        case 3: return 'Апреля';
        case 4: return 'Мая';
        case 5: return 'Июня';
        case 6: return 'Июля';
        case 7: return 'Августа';
        case 8: return 'Сентября';
        case 9: return 'Октября';
        case 10: return 'Ноября';
        case 11: return 'Декабря';
    }
}

const getHour = () => {
    let hour = date.getHours();
    
    if ( hour === 1 || hour === 21 ) return `${date.getHours()} час`;
    if ( (hour >= 2) && (hour <= 4) || (hour === 22) || (hour === 23) ) return `${date.getHours()} часа`;
    if ( (hour >= 5) && (hour <= 20) || hour === 0 ) return `${date.getHours()} часов`;
}

const getTime = (unit) => {
    let time;
    
    if (unit == 'минуты') {
        time = String(date.getMinutes()); 
        unit = 'минут';
    } else if (unit == 'секунды') {
        time = String(date.getSeconds()); 
        unit = 'секунд';
    }

    if (time.slice(-1) == '1') 
        return `${time} ${unit}а`
    else if (time.slice(-1) == '2' || time.slice(-1) == '3' || time.slice(-1) == '4') 
        return `${time} ${unit}ы`
    else 
        return `${time} ${unit}`
}

const getFormatNumber = (number) => {

    if (0 <= number && number <= 9) {
        return `0${number}`
    }
    return number
}


console.log(`Сегодня ${getDay()}, ${date.getDate()} ${getMonth()}, ${getHour()} ${getTime('минуты')} ${getTime('секунды')}`);

console.log(`${getFormatNumber( date.getDay() )}.${getFormatNumber( date.getMonth() )}.${date.getFullYear()} - ${getFormatNumber( date.getHours() )}:${getFormatNumber( date.getMinutes() )}:${getFormatNumber( date.getSeconds() )}`);
