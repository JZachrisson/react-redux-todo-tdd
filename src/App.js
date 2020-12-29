import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [input, setInput] = useState('');

  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      name: input,
    };

    setTodos((prev) => [...prev, todo]);
    setInput('');
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={input} onChange={onChange} />
        <button>Add Todo</button>
      </form>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
