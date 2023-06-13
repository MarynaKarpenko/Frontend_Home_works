// const number = prompt("Введите число")
// const discont = .1
// const sum = number * discont
// const result = number - sum
// console.log(result)

// const number1 = prompt("Введите первое число")
// const number2 = prompt("Введите второе число")
// if(number1 < number2) {
//     console.log(`Наименьшее число: ${number1}`)
// } else if(number2 < number1) {
//     console.log(`Наименьшее число: ${number2}`)
// } else {
//     console.log(`Числа равны`)
// }

// const number = +prompt("Введите число")
// if(number < 100) {
//     console.log("Число меньше 100")
// } else if(number == 100) {
//     console.log("Число равно 100")
// } else {
//     console.log("Число больше 100")
// }

const name = prompt("Введите Ваше имя")
const age = +prompt("Введите Ваш возраст (в годах)")
if(age >= 18) {
    console.log(`Hello, ${name}`)
} else if(age < 18) {
    console.log(`Hi, ${name}`)
}