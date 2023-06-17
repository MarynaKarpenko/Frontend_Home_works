// Обращаться к кнопкам не по отдельно, а ко всем одновременно
//             querySelectorAll()

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains('red-btn')) {
        buttons[i].addEventListener("click", function () {
            document.body.style.backgroundImage = "none"
            document.body.style.backgroundColor = "#F08080"
            buttons[i].style.backgroundColor = "red"
            buttons[i].style.color = "black"
        });
    } else if (buttons[i].classList.contains('green-btn')) {
        buttons[i].addEventListener("click", function () {
            document.body.style.backgroundImage = "none"
            document.body.style.backgroundColor = "#00FF7F"
            buttons[i].style.backgroundColor = "green"
            buttons[i].style.color = "black"
        });
    } else if (buttons[i].classList.contains('blue-btn')) {
        buttons[i].addEventListener("click", function () {
            document.body.style.backgroundImage = "none"
            document.body.style.backgroundColor = "#00CED1"
            buttons[i].style.backgroundColor = "blue"
            buttons[i].style.color = "black"
        });
    } else if (buttons[i].classList.contains('yellow-btn')) {
        buttons[i].addEventListener("click", function () {
            document.body.style.backgroundImage = "none"
            document.body.style.backgroundColor = "#FFEFD5"
            buttons[i].style.backgroundColor = "yellow"
            buttons[i].style.color = "black"
        });
    } else if (buttons[i].classList.contains('img-btn')) {
        buttons[i].addEventListener("click", function () {
            document.body.style.backgroundImage = "url('./img.jpg')"
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat"
            buttons[i].style.backgroundColor = "white"
            buttons[i].style.color = "black"
        });
    }
}
