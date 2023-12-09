import ToDoList from "./ToDoList"
import style from './ToDoItem.module.css'

const getDayOfWeek = (day) => {
  const daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return daysOfWeek[day];
};

const getDayAbbreviation = (day) => {
  const daysAbbreviation = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return daysAbbreviation[day];
};

function ToDoItem(props) {
   const { todos, delTodoById, changeCompletedTodo } = props;

  // Функция для сортировки по дням недели
  const sortByDay = (day) => {
    return todos.filter((todo) => todo.day === day);
  };

  return (
    <div>
      {[...Array(7).keys()].map((day) => (
        <div key={day} className={style.todo_card}>
          <h2 className={style.day}>{getDayOfWeek(day)}</h2>
          {todos.map((elem) => (
            elem.day === getDayAbbreviation(day) && (
              <ToDoList
                key={elem.id}
                id={elem.id}
                title={elem.title}
                completed={elem.completed}
                delTodoById={delTodoById}
                changeCompletedTodo={changeCompletedTodo}
              />
            )
          ))}
        </div>
      ))}
    </div>
  );
}
export default ToDoItem