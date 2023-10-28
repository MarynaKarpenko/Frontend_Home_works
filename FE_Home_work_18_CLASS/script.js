/* 1. Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, 
добавьте геттер validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. 
Если знак отсутствует, геттер validPhone должно принять булевое значение false, в противном случае — true. 
Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. 
Пример значений переменных: 
let name = "Pizza" 
let phone = "81234567890" 

Пример результата: false */

class Delivery {
    constructor(name, phone){
        this.name = name,
        this.phone = phone
    }
    get validPhone(){
        return this.phone.startsWith('+');
    }
}
let name = "Pizza" 
let phone = "81234567890" 

// const delivery = new Delivery(name, phone);
// console.log(delivery.validPhone);

/* 2. В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование 
статей на сайте. Создайте новый класс Users, который наследуется от класса Permissions. 
Дополнительно в классе Users добавьте свойство name, значение которого класс принимает в качестве 
аргумента конструктора. */
class Permissions {
    constructor() {
        this.create = false;
        this.read = true;
        this.update = false;
        this.remove = false;
    }
}
class Users extends Permissions{
    constructor(name){
        super();
        this.name = name;
    }
}

/* 3. Все печатные издания имеют название, год издания, состоят из определенного количества страниц, 
а ещё могут портиться. 

Создайте класс PrintEditionItem со свойствами: name, releaseDate, pagesCount, state, type. 

Конструктор класса должен принимать название (name), дату выпуска (releaseDate) и количество страниц (pagesCount) 
в качестве аргумента. Состояние (state) по умолчанию установите равным 100, тип type пока должен быть равен null.

Испорченное издание можно подклеить и этим улучшить его состояние. Создайте метод fix(), увеличивающий state в 
полтора раза. Метод не должен принимать аргументов. 

Нельзя улучшить новое издание и бесполезно подклеивать полностью уничтоженное. Создайте «сеттер» для свойства state,
принимающий в качестве аргумента новое состояние печатного издания (число). Если новое состояние меньше 0, 
«сеттер» должен записать в свойство state значение 0. Если новое состояние больше 100, 
должно быть записано значение 100. В остальных случаях в свойство state записывается переданное в «сеттер» значение. 

Создайте «геттер», который читает значение свойства state. 

Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem. 
Конструктор класса должен принимать такие же параметры, как и класс-родитель. 
От базового печатного издания журнал отличается только типом. Значение свойства type равно "magazine". 

Создайте класс Book, наследующийся от класса PrintEditionItem. 
Конструктор класса должен принимать такие же параметры, как и класс-родитель, 
а также имя автора книги author. Значение свойства type равно "book".

Создайте классы NovelBook для романов, FantasticBook для фантастических произведений и DetectiveBook для детективов,
наследующиеся от класса Book. Значения свойства type равны "novel", "fantastic" и "detective" соответственно.
 */
class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state){
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this.state = state,
        this.type = null
    }
    fix(){
        this.state *= 1.5;
    }
    set newState(num) {
        if (num < 0) {
            this.state = 0;
        } else if (num > 100) {
            this.state = 100;
        } else {
            this.state = num;
        }
    }
    get getState(){
        return this.state;
    }
}
class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state){
        super(name, releaseDate, pagesCount, state);
        this.type = 'magazine';
    }
}
class Book extends PrintEditionItem{
    constructor(autor, releaseDate, pagesCount, state, name){
        super(name, releaseDate, pagesCount, state);
        this.autor = autor,
        this.type = 'book';
    }
}
class NovelBook extends Book{
    constructor(autor, releaseDate, pagesCount, state, name){
        super(autor, releaseDate, pagesCount, state, name);
        this.type = 'novel'
    }
}
class FantasticBook extends Book{
    constructor(autor, releaseDate, pagesCount, state, name){
        super(autor, releaseDate, pagesCount, state, name);
        this.type = 'fantastic'
    }
}
class DetectiveBook extends Book{
    constructor(autor, releaseDate, pagesCount, state, name){
        super(autor, releaseDate, pagesCount, state, name);
        this.type = 'detective'
    }
}
let new_print = new PrintEditionItem("Book Title", "2023-10-25", 300);

// console.log(new_print.state);
// new_print.fix();
// console.log(new_print.state);

new_print.newState = 50;
// console.log(new_print.state); // 50
new_print.newState = -10;
// console.log(new_print.state); // 0
new_print.newState = 120;
// console.log(new_print.state); // 100

// console.log(new_print.getState);

let new_print2 = new Magazine("Magazine Title", "2023-10-25", 100, 50);
// console.log(new_print2);

let new_print3 = new Book('Stephen King', '2023-10-25', 500, 80, 'The Shining')
console.log(new_print3);

let new_NovelBook = new NovelBook('Agatha Christie', '2023-10-25', 280, 95, 'Murder on the Orient Express')
console.log(new_NovelBook);

let new_FantasticBook = new FantasticBook('J.K. Rowling', '2023-10-25', 400, 90, 'Harry Potter')
console.log(new_FantasticBook);

let new_DetectiveBook = new DetectiveBook('Arthur Conan Doyle', '2023-10-25', 350, 85, 'Sherlock Holmes')
console.log(new_DetectiveBook);

