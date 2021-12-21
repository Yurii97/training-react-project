import React from 'react';
import './Todolist.css';

const Todolist = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, complited }) => (
      <li key={id} className="TodoList__item">
        <p className="TodoList__text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>remove</button>
      </li>
    ))}
  </ul>
);

export default Todolist;
