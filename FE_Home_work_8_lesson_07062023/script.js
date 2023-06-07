// Task 1
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let i = 0; i < numbers.length; i++) {
//     if(i % 2 == 0)
//     console.log(i)
// }

// Task 2
// const number = 55
// for(let i = 0; i <= number; i++) {
//     if(i >= 20) 
//     console.log(i)
// }

// Task 3
// const numbers = [3, 5, 11, 2, 8, 1, 6]
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }
// const numbers_squared = []
// for(let i = 0; i < numbers.length; i++) {
//     const squared = numbers[i] * numbers[i]
//     numbers_squared.push(squared)
// }
// console.log(numbers_squared)

// Task 4
// const last_elem =[]
// last_elem.push(numbers_squared[numbers_squared.length - 1])
// console.log(last_elem)

// Task 5
const users = [ {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
}
]
for(let i = 0; i < users.length; i++) {
console.log(`User’s name is ${users[i].first_name} ${users[i].last_name}. He is ${users[i].age} years old.`)
}