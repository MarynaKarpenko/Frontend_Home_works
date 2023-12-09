import React from 'react'
import style from './ToDoList.module.css'

function ToDoList(props) {

    const {title, completed, id, delTodoById, changeCompletedTodo} = props

    const card_styles = {
        backgroundColor: completed ? 'green' : 'red'
    }

    return(
        <div className={style.todo_card}
        style={card_styles}
        onDoubleClick={() => delTodoById(id)}
        onClick={() => changeCompletedTodo(id)}
        >

            <h2>{title}</h2>
            <p>{completed+''}</p>
        </div>
    )
}

export default ToDoList;