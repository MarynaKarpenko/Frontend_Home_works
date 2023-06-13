// Task 1. Напишите функцию, которая принимает два числовых аргумента
//  и выводит в консоль все четные числа от большего к меньшему.
function printEventNumbers(num1, num2) {
    if(num1 > num2) {
        for (let i = num1; i >= num2; i--) { 
            if (i % 2 === 0) {
                console.log(i);
            }
        }
            return num1;
    } else if(num2 > num1) {
        for (let i = num2; i >= num1; i--) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
            return num2;
    } else {
        if (num1 % 2 === 0) {
            console.log(num1);
            return num1;
        } else {
            return;
        }
    }   
}
console.log(printEventNumbers(32, 24));

// Task 2. Напишите функцию power, которая принимает два числовых аргумента 
// (основание степени и саму степень) и возвращает число в указанной степени. 
// Значение степени должно быть указано по умолчанию 2.
function powerNumbers(base, degree = 2) {
    let result = 0;
    for (let i = 0; i < degree; i++) {
        return result = base * degree;  
    }
}
console.log(powerNumbers(4));

// Task 3. Напишите функцию, которая принимает числовой аргумент n 
// и считает сумму чисел от 1 до n.
function sumNumbers(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
       sum = sum + i;
    }
    return sum;
}
console.log(sumNumbers(5));


// Task 4. Напишите функцию, которая принимает два числовых аргумента 
// n и m и считает сумму четных чисел и нечетных чисел от n до m. 
// Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function printSumEvenOdd(n, m) {
    let start = Math.min(n, m);
    let end = Math.max (n, m);
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = start; i <= end; i++) {     
        if (i % 2 === 0) {
            sumEven = sumEven + i;
        } else {
            sumOdd = sumOdd + i;
        }
    }
    console.log("Сумма четных чисел:", sumEven);
    console.log("Сумма нечетных чисел:", sumOdd);
}
printSumEvenOdd(5, 32);


// Task 5. Напишите функцию, которая принимает в качестве аргументов массив строк, 
// а возвращает первый самый длинный элемент массива. 
// Если входной массив пуст, функция возвращает null. 
// Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// (string.length > string.length) - сравнение длины строк
// Пример: [ 'one', 'two', 'three' ] => 'three'
function printLongestElement(array) {
    if (array.length === 0) {
        return null;
    }
    let longest = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.length > longest.length) {
            longest = element;
        }
    }
    return longest;
}
console.log(printLongestElement(['one', 'two', 'three', 'four', 'sixty seven']))