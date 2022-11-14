import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/action/todoListAction';
const FormInput = (props) => {
  const [nameTodo, setNameTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo({ nameTodo, status: 'active' }));
  };

  const handleChange = (e) => {
    setNameTodo(e.target.value)
  }

  return (
    <div>
      <h1 className="mt-20 text-3xl font-extrabold text-center">
        {props.name}, Whats the plant for today?
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="input text-center mt-14">
          <input
            className="border-2 border-gray-300 mr-5 p-3 w-96 rounded-sm"
            type="text"
            placeholder="What to do"
            value={nameTodo}
            onChange={handleChange}
          />
          <button className="bg-purple-700 hover:bg-purple-900 p-3 rounded-md w-16 text-white">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
