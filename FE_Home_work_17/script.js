/* 1. Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
Примечание: инициализация дат должна быть внутри функции */
function checkDate() {
    let currentDate = new Date();
    let lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    let difference = lastDayOfMonth.getTime() - currentDate.getTime()
    let day = difference / (1000 * 60 * 60 * 24)
    console.log(Math.round(day));
} 
checkDate()


/* 2. Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
Если пятница была вчера - “Пятница была вчера”
Если пятница будет завтра - “Завтра пятница!”
Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

Предусмотрите вывод 4 пункта (дня, дней) */
function isItFridayToday() {
    let data = new Date()
    let day_number = data.getDay()
    let days_until_friday = 5 - day_number;
    if (day_number === 5) {
        console.log('Сегодня пятница');
    }else if(day_number === 6){
        console.log('Пятница была вчера');
    }else if(day_number === 4){
        console.log('Завтра пятница!');
    }else {
        if(days_until_friday < 0){
            days_until_friday +=7
            console.log(`Пятница будет через ${days_until_friday} ${days_until_friday === 1 ? 'день' : 'дня'}`);
        }
    }
}
isItFridayToday()


/* 3. Задан массив prices, передающий элементы строкового типа. Напишите функцию getInfo(prices), 
которая получает массив и возвращает количество элементов, которые начинаются на “Цена” и количество элементов, 
которые заканчиваются на “$” в виде массива. */

function getInfo(prices) {
    let startsWithPriceCount = 0;
    let endsWithDollarCount = 0;
    for (let price of prices) {
        if (price.startsWith('Цена')) {
            startsWithPriceCount++;
        }
        if (price.endsWith('$')) {
            endsWithDollarCount++;
        }
    }

    return [startsWithPriceCount, endsWithDollarCount];
}
let prices = [ 
    'Цена товара - 1200$', 
    'Стоимость - 500$', 
    'Цена не определена', '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
]
console.log(getInfo(prices)) // [3,3]

/* 4. Задан массив arrays. Сформируйте два новых массива phones и emails, 
которые будут содержать данные по примеру: 

Результат: 
['89840959944','+79840959933','89840959900','+79840959911','89840959922'] 
['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com'] */
 
function getPhoneEmail(arrays){
    const phoneArr = arrays.filter(item => /^\d/.test(item));
    const emailArr = arrays.filter(item => /\S+@\S+\.\S+/.test(item));

    return [phoneArr, emailArr];
}
let arrays = [ 
    '89840959944 exampleonemain@mail.ru', 
    '+79840959933 forreason@yandex.net', 
    'somemail@mail.ru', 
    '89840959900 example@gmil.ru', 
    '+79840959911', 
    'grandthere@mail.ru',
    'jetpackfor@gmail.ru',
     '89840959922 some@yandex.com',
]
const [phones, emails] = getPhoneEmail(arrays);
console.log(phones);
console.log(emails);


/* 5. Задан массив cards, передающий элементы строкового типа. 
Необходимо зашифровать номера карт по следующему правилу: заменить всю строку на 5 символов “*”, 
оставив первые 4 и последние 4 цифры.

Результат: [
'4000*****9499',
'4000*****7379',
'4000*****9869',
'4000*****7859',
'4000*****6899',
'4000*****4699'
]
 */


function hideCardNumbers(cards) {
    return cards.reduce((result, card) => {
        const sanitizedCard = card.replace(/\s/g, '');
        const visibleDigits = sanitizedCard.slice(0, 4) + '*'.repeat(sanitizedCard.length - 8) + sanitizedCard.slice(-4);
        const formattedCard = visibleDigits.replace(/(.{4})/g, '$1 ');
        result.push(formattedCard);
        return result;
    }, []);
}
let cards = [ 
    '4000 0012 0056 9499', 
    '4000 0013 5456 7379', 
    '4000 0014 1456 9869', 
    '4000 0015 3466 7859', 
    '4000 0016 3556 6899', 
    '4000 0017 4456 4699'
]
const maskedCards = hideCardNumbers(cards);
console.log(maskedCards);
