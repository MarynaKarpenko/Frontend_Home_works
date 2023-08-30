// 1. Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

const sheep = [true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true]

function numSheep(sheepArr) {
    let elem = 0
    for (let i = 0; i < sheepArr.length; i++) {
        if (sheepArr[i] === true) {
            elem ++
        }
    }
    return elem
}
console.log(numSheep(sheep));


// 2. Make a function that returns the value multiplied by 50 and increased by 6. 
// If the value entered is a string it should return "Error".

const math = (callback) => typeof value === 'string' ?"Error" : callback(5) 

console.log(math((input) => input * 50 + 6));
console.log(math((input) => 'some string'));


// 3. Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// don't worry about uppercase vowels
// y is not considered a vowel for this kata
const shortcut = (string) => string.replace(/[aeiou]/g, '');
console.log(shortcut("hello"));
console.log(shortcut("codewars"));
console.log(shortcut("goodbye"));
console.log(shortcut("HELLO"));


// 4. Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
function bmi(weight, height, callback) {
    const result = weight / height ** 2
    return callback(result)
}
function getBmi(bmiValue) {
    if (bmiValue <= 18.5) {
        return "Underweight"
    } else if (bmiValue <= 25.0) {
        return "Normal"
    } else if (bmiValue <= 30.0) {
        return "Overweight"
    } else {
        return "Obese"
    } 
}
let weight = 50;
let height = 1.61;

console.log(bmi(weight, height, getBmi));


// 5. 
const multiply = (a, b) => (a * b)

console.log(multiply(5, 4));


// 6. Complete the method that takes a boolean value and return a "Yes" string for true, 
// or a "No" string for false.
const boolToWord = bool => bool ? "Yes" : "No";

console.log(boolToWord(true));
console.log(boolToWord(false));


// 7. Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.
var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}
console.log(summation (1));
console.log(summation(2456));


// 8. I'm new to coding and now I want to get the sum of two arrays... 
// Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const totalSum = arrayPlusArray(arr1, arr2);
function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    let totalSum = 0
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
        
    }
    return totalSum +=sum
}
console.log(totalSum)


// 9. 
function points(games) {
    let totalPoints = 0;
    games.forEach(element => {
        if (element[0] > element[element.length - 1]) {
            totalPoints += 3
        } else if (element[0] == element[element.length - 1]) {
            totalPoints ++
        }
    });
    return totalPoints
}
console.log(points(["3:1", "2:2", "0:1", "4:0", "1:1", "3:2", "2:1", "0:0", "1:2", "3:0"]));


// 10. Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
const litres = time => Math.floor(time * 0.5)

const cyclingTime = 3.5;
const litersDrank = litres(cyclingTime);
console.log("Liters drank:", litersDrank);