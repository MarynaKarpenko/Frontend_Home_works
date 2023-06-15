// Обращаться к кнопкам не по отдельно, а ко всем одновременно
//             querySelectorAll()

const buttons = document.querySelectorAll("button");


for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains('red-btn')) {
        buttons[i].addEventListener("click", function () {
            document.body.style.backgroundColor = "#F08080"
            buttons[i].style.backgroundColor = "red"
            buttons[i].style.color = "black"
        });
    } else if (buttons[i].classList.contains('green-btn')) {
        buttons[i].addEventListener("click", function () {
            document.body.style.backgroundColor = "#00FF7F"
            buttons[i].style.backgroundColor = "green"
            buttons[i].style.color = "black"
        });
    } else if (buttons[i].classList.contains('blue-btn')) {
        buttons[i].addEventListener("click", function () {
            document.body.style.backgroundColor = "#00CED1"
            buttons[i].style.backgroundColor = "blue"
            buttons[i].style.color = "black"
        });
    } else if (buttons[i].classList.contains('yellow-btn')) {
        buttons[i].addEventListener("click", function () {
            document.body.style.backgroundColor = "#FFEFD5"
            buttons[i].style.backgroundColor = "yellow"
            buttons[i].style.color = "black"
        });
    } else if (buttons[i].classList.contains('img-btn')) {
        buttons[i].addEventListener("click", function () {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1685648043607-4763474b0101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60')"
            buttons[i].style.backgroundColor = "white"
            buttons[i].style.color = "black"
        });
    }
}
