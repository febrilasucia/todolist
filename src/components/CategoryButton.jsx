import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ListTodo from './ListTodo';

const CategoryButton = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("")
  const dispatch = useDispatch();

  const dataAll = () => {
    setType('all')
  };
  const dataActive = () => {
    setType('active')
  };
  const dataComplete = () => {
    setType('completed')
  };


  return (
    <>
      <div>
        <div className="mt-16 flex justify-center justify-items-center">
          <button onClick={() => dataAll()} className="mx-5">
            all
          </button>
          <button onClick={() => dataActive()} className="mx-5">
            active
          </button>
          <button onClick={() => dataComplete()} className="mx-5">
            complete
          </button>
        </div>
      </div>
      <ListTodo type={{type}}/>
    </>
  );
};

export default CategoryButton;
