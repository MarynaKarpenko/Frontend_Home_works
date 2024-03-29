import ToDoList from "../ToDoList/ToDoList"
import style from './ToDoItem.module.css'

const getDayOfWeek = (day) => {
  const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  return daysOfWeek[day];
};

const getDayAbbreviation = (day) => {
  const daysAbbreviation = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  return daysAbbreviation[day];
};

function ToDoItem(props) {
   const { todos, delTodoById, changeCompletedTodo } = props;

  // Функция для сортировки по дням недели
  const sortByDay = (day) => {
    return todos.filter((todo) => todo.day === day);
  };

  return (
    <div className={style.card}>
      {[...Array(7).keys()].map((day) => (
        <div key={day} className={style.todo_card}>
          <h2 className={style.day}>{getDayOfWeek(day)}</h2>
          {todos.map((elem) => (
            elem.day.toLowerCase() === getDayAbbreviation(day).toLowerCase() && (
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