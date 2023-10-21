class NumberArray {
    constructor(numbers) {
        this.num = numbers
    }
    getLastElem(){
        if(this.num === 0){
            return undefined
        }
        return this.num[this.num.length - 1]
    }
    getAbs = () => {
        if(this.num.length < 2){
            return undefined
        }
        const firstElement = this.num[0];
        const lastElement = this.getLastElem();
        return Math.abs(firstElement - lastElement);
    }
    getSum = () => {
        return this.num.reduce((acc, elem) => acc + elem, 0)
    }
    setArray(n){
        this.num = this.num.map((el) => el * n)
    }
    createObject = () => {
        return this.num.reduce((acc, el, index) => {
            acc[`elem ${index + 1}`] = el;
            return acc;
        }, {})
    }
}
const new_num = new NumberArray ([1, 2, 45,98, 35])
console.log(new_num.num);

// 1. getLastElem(). Метод должен всегда возвращать последний элемент массива
console.log(new_num.getLastElem());

// 2. getAbs(). Метод должен возвращать абсолютное значение разницы первого и последнего элемента 
console.log(new_num.getAbs());

// 3. getSum(). Метод должен возвращать сумму всех элементов сво-ва array
console.log(new_num.getSum());

// 4. setArray(n). Метод должен переопределить сво-во array на новый массив, где каждый элемент будет умножен на аргумент n.
new_num.setArray(2)
console.log(new_num.num);

// 5. createObject(). Метод должен вернуть объект c количеством сво-йств равному количеству элементов массива сво-ва array. 
// В качестве ключа сформируйте значение elem{n} 
console.log(new_num.createObject());