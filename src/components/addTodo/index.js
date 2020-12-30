import React from 'react';

const AddTodo = () => (
  <div>
    <form>
      <input className="todo-input" type="text" />
      <button type="submit" className="todo-submit">
        Add Todo
      </button>
    </form>
  </div>
);

export default AddTodo;
