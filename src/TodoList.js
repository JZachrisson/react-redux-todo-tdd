import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem id={todo.id} name={todo.name} />;
      })}
    </ul>
  );
};

export default TodoList;
