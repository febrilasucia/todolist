import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';

const ListTodo = (props) => {
  const { todo } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [type, setType] = useState('active')

  {(() => {
    if ((type == 'active')) {
      todo.data
        .filter((item) => item.status == 'active')
        .map((item, index) => (
          <Todo i={index} key={index} todoName={item.todoName} />
        ));
    } else if ((type == 'completed')) {
      todo.data
        .filter((item) => item.status == 'completed')
        .map((item, index) => (
          <Todo i={index} key={index} todoName={item.todoName} />
        ));
    } else if ((type == 'all')) {
      todo.data.map((item, index) => (
        <Todo i={index} key={index} todoName={item.todoName} />
      ));
    } else {
      return <div>data tidak ada</div>;
    }
  })()}
  
  
  console.log(type);
  

  return (
    <>

      {todo.data != [] ? (todo.data.map((item, index) => (<Todo i={index} key={index} todoName={item.nameTodo} status={item.status} />)))
      : (props.type = 'active') ? (todo.data.filter((item) => item.status == 'active').map((item, index) => (
            <Todo i={index} key={index} todoName={item.todoName} />
          ))
      ) : (
        <span>data tidak ada</span>
      )}
    </>
  );
};

export default ListTodo;
