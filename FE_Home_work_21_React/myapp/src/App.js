import { useState } from 'react';
import './App.css';
import AddForms from './components/AddForms/AddForms';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoItem from './components/ToDoList/ToDoItem';

function App() {

  const daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    const start_todos = [
    {id: 1, title: 'Купить дверь', completed: true, day: 'ПН'},
    {id: 2, title: 'Сходить в зал', completed: false, day: 'ПН'},
    {id: 3, title: 'Купить дверь', completed: true, day: 'ВТ'},
    {id: 4, title: 'Сходить в зал', completed: true, day: 'ВТ'},
    {id: 5, title: 'Купить ручку', completed: true, day: 'ВТ'},
    {id: 6, title: 'Помыть кота', completed: true, day: 'ВТ'},
    {id: 7, title: 'Починить свет', completed: true, day: 'ВТ'},
    {id: 8, title: 'Зарядить воду', completed: true, day: 'СР'}
  ]

  const [todos, setTodos] = useState(start_todos);
  const [newTodo, setNewTodo] = useState({
    title: '',
    day: '',
    importance: '',
  });

  const addTodo = () => {
    if (newTodo.title.trim() === '' || newTodo.day.trim() === '') {
      return;
    }

    const todo = {
      id: Date.now(),
      title: newTodo.title,
      completed: false,
      day: newTodo.day,
      importance: newTodo.importance,
    };

    setTodos([...todos, todo]);
    setNewTodo({ title: '', day: '', importance: '' });
  };

  const getDayOfWeek = (day) => {
    return ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'][day];
  };

  const getDayAbbreviation = (day) => {
    return ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][day];
  };

  const delTodoById = (id) => {
    const filtered_todos = todos.filter((elem) => elem.id !== id);
    setTodos(filtered_todos);
  };

  const changeCompletedTodo = (id) => {
    const change_todos = todos.map((elem) => {
      if (elem.id === id) {
        elem.completed = !elem.completed;
      }
      return elem;
    });
    setTodos(change_todos);
  };

  return (
    <div>
      <AddForms newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <ToDoItem
        todos={todos}
        delTodoById={delTodoById}
        changeCompletedTodo={changeCompletedTodo}
      />
    </div>
  );
}

export default App;