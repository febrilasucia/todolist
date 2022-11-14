import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/action/todoListAction';

const Todo = (props) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const mountModal = () => {
    setModal(true);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between content-center mt-4 w-96 border-2 h-14 px-5">
          <div>
            <input type="checkbox" name="check" id="check" />
          </div>
          <div>
            <p>{props.todoName}</p>
          </div>
          <div>
            <button onClick={() => mountModal()} className="mr-5">
              <FontAwesomeIcon icon={faPencil} />
            </button>
            <button onClick={() => dispatch(deleteTodo(props.i))}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
      {modal && <Modal />}
    </>
  );
};

export default Todo;
