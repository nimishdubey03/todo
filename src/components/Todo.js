import React from 'react';

import { ReactComponent as Trash } from './../assets/icons/trash.svg';

const Todo = (props) => {
  const deletehandler = () => {
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
  };
  return (
    <li>
      {props.text.length > 0 ? props.text : 'hey get some Todo first..!!'}
      <button
        onClick={deletehandler}
        className="btn btn-sm btn-outline-danger float-end"
      >
        <Trash className={'trash'}></Trash>
      </button>
    </li>
  );
};

export default Todo;
