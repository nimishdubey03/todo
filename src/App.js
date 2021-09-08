import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodosList from './components/TodosList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  // Run once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  // use Efect
  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  // save to local

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div>
      <Header />
      <InputTodo
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodosList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
