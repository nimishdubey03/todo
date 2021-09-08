import React from 'react';

import Todo from './Todo';

const TodosList = (props) => {
  return (
    <div className="container">
      <div className="todos">
        <ul>
          {props.todos.map((todo) => (
            <Todo
              setTodos={props.setTodos}
              todos={props.todos}
              todo={todo}
              key={todo.id}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodosList;
