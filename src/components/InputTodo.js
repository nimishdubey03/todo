import React from 'react';

const InputTodo = (props) => {
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputText, id: Math.random() * 1000 },
    ]);
    props.setInputText('');
  };

  return (
    <div className="wrapper container d-flex justify-content-center">
      <form className="input_data gap-3">
        <input
          value={props.inputText}
          onChange={inputTextHandler}
          className="todo_input"
          type="text"
          placeholder="add your todo here"
        />
        <button
          onClick={submitTodoHandler}
          className="btn btn-outline-success btn-sm"
        >
          add
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
