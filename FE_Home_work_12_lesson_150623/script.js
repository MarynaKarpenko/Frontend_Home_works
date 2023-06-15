// Задача 1. Написать цикл, который создает множество параграфов 
// с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
// Добавить созданные параграфы в div с классом numbers.

function func() {
    const section = document.querySelector(".Task1")
    section.innerHTML += `<h2>Задача 1. Написать цикл, который создает множество параграфов 
    с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
    Добавить созданные параграфы в div с классом numbers.</h2>`;

    const numbersDiv = document.querySelector(".numbers")
    
for (let i = 100; i >= 50; i -= 10) {
    const paragraf = document.createElement("p");
    paragraf.innerText = i;
    numbersDiv.appendChild(paragraf)
}
}
func()


// Задача 2. Написать цикл, который проходится по массиву строк, 
// для каждой строки создает параграф и добавляет его в div с классом strings_container. 
// Строки взять произвольные.

function func2() {
    const section = document.querySelector(".Task2")
    section.innerHTML += `<h2>Задача 2. Написать цикл, который проходится по массиву строк, 
    для каждой строки создает параграф и добавляет его в div с классом strings_container. 
    Строки взять произвольные.</h2>`;

    const arrParagraf = ["Anna is a translator", "Alex is a curator", "Margo is a gymnast", "Kirill is a manager"];

    const linesDiv = document.querySelector(".strings_container");

for (let i = 0; i < arrParagraf.length; i++) {
    const paragraf = document.createElement("p");
    paragraf.innerText = arrParagraf[i];
    linesDiv.appendChild(paragraf)
}    
}
func2() 


// Задача 3. Написать цикл, который проходится по массиву с объектами - 
// у объектов свойства first_name, last_name и  age (данные взять произвольные) - 
// и создает карточки только для совершеннолетних пользователей. 
// Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
// Добавить все карточки в div с классом users_container.

function func3() {
    const section = document.querySelector(".Task3")
    section.innerHTML += `<h2>Задача 3. Написать цикл, который проходится по массиву с объектами - 
    у объектов свойства first_name, last_name и  age (данные взять произвольные) - 
    и создает карточки только для совершеннолетних пользователей. 
    Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
    Добавить все карточки в div с классом users_container.</h2>`;

    const datas = [
        {
            first_name: "Ivan",
            last_name: "Ivanov",
            age: 32
        },
        {
            first_name: "Petr",
            last_name: "Petrov",
            age: 15
        },
        {
            first_name: "Vladimer",
            last_name: "Sidorov",
            age: 45
        },
        {
            first_name: "Alisa",
            last_name: "Nesteruk",
            age: 16
        },
        {
            first_name: "Katris",
            last_name: "Abrimova",
            age: 21
        },
        {
            first_name: "Helen",
            last_name: "Namen",
            age: 29
        },
    ]

    const datasDiv = document.querySelector(".users_container")

    for (let i = 0; i < datas.length; i++) {
        if (datas[i].age >= 18) {
            const paragraf = document.createElement("p");
            datasDiv.innerHTML += ` <div class="users_container">
            <p> ${datas[i].first_name} ${datas[i].last_name} ${datas[i].age} </p>
       </div> `
        }
        
    }

}
func3()

