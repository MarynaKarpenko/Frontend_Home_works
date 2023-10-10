/* 1. Напишите функцию getTodos(username), которая в качестве аргумента принимает никнейм пользователя 
(/users) и выводит список его задач (/todos).
В качестве ответа в консоль выведите массив с задачами указанного пользователя */

async function getTodosusername(username) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const todos = await response.json()

        const userTodos = todos.filter(todo => todo.username === username);

        console.log(userTodos);

    } 
    catch (err) {
        console.log(err);
    }
}

getTodosusername('Bret');


/* 2. Напишите функцию getСomments(title), которая в качестве аргумента принимает заголовок поста 
(/posts) и выводит список всех его комментариев (/comments).
В качестве ответа в консоль выведите массив с комментариями. Если у заданного поста комментариев нет, 
выведите в консоль соответствующее сообщение. */

async function getСomments(title) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const comments = await response.json()

        const postComments = comments.filter(todo => todo.postId === title);

        console.log(postComments);

    } 
    catch (err) {
        console.log(err);
    }
}

getСomments(1);

/* 3. Напишите функцию getPhotoByNickName(username), которая в качестве аргумента принимает никнейм 
пользователя (/users) и выводит все его фотографии (/photos). 
В качестве ответа выведите в консоль массив со всеми фотографиями указанного пользователя. */
async function getPhotoByNickName(username) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()

        const user = users.filter(user => user.username === username);
        if(!user) {
            console.log("Пользователь с указанным никнеймом не найден.");
            return;
        }

        const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos')
        const photos = await photosResponse.json()

        const userPhotos = photos.filter(photo => photo.userId === user.id);
        if(userPhotos.length === 0) {
            console.log("У данного пользователя нет фотографий.");
        } else {
            console.log(userPhotos);
        }
    } 
    catch (err) {
        console.log(err);
    }
}
getPhotoByNickName('Bret');
