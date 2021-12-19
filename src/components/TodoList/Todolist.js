import React from 'react';

const Todolist = ({ todos }) => (
  <ul>
    {todos.map(({ id, text, complited }) => (
      <li key={id}>
        <p>{text}</p>
        <button>remove</button>
      </li>
    ))}
  </ul>
);

export default Todolist;
