import React, { useState } from 'react';
import style from './AddForms.module.css';

const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
const importanceOptions = ['Важно', 'Не важно'];

export default function AddForms({ newTodo, setNewTodo, addTodo }) {
  const handleChange = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form className={style.forms}>
        <div className={style.input_forms}>
          <div>
            <label></label>
            <select
              className={style.input_list}
              name="day"
              value={newTodo.day}
              onChange={handleChange}
            >
              <option value="">Выберите день</option>
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <label></label>
            <select
              className={style.input_list}
              name="importance"
              value={newTodo.importance}
              onChange={handleChange}
            >
              <option value="">Выберите важность</option>
              {importanceOptions.map((importance) => (
                <option key={importance} value={importance}>
                  {importance}
                </option>
              ))}
            </select>
          </div>
          <input
            className={style.add_forms_description}
            placeholder="Описание"
            type="text"
            name="title"
            value={newTodo.title}
            onChange={handleChange}
          />
        </div>
        <div className={style.div_button}>
          <button
            className={style.add_forms_button}
            type="button"
            onClick={addTodo}
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
}