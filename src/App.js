import React from 'react';
import TodoList from './Todo';
import './App.css';

function App() {
  const todos = [
    {id: 1, completed: false, title: "todos 1"},
    {id: 2, completed: false, title: "todos 2"},
    {id: 3, completed: false, title: "todos 3"},
  ]
  return (
    <div className="wrapper">
      <h1>sdffsdfsdf</h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
