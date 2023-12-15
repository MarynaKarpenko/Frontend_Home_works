import React from 'react'
import style from './ToDoList.module.css'
import { RxCross1 } from "react-icons/rx";

function ToDoList(props) {

    const {title, completed, id, delTodoById, changeCompletedTodo} = props

    const card_styles = {
        backgroundColor: completed ? '#1ABC9C' : '#E74C3C'
    }

    return(
        <div
        className={style.todo_cards}
        style={card_styles}
        onClick={() => changeCompletedTodo(id)}
        >
            <div>
                <RxCross1 className={style.close_icon} onDoubleClick={() => delTodoById(id)}/>
                <h2>{title}</h2>
            </div>
            
        </div>
    )
}

export default ToDoList;