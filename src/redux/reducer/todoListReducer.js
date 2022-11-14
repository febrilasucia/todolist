import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from '../action/todoListAction';

const initialState = {
  data: [
    { nameTodo: 'belajar', status: 'active' },
    { nameTodo: 'tidur', status: 'active' },
    { nameTodo: 'main game', status: 'active' },
    { nameTodo: 'belajar react', status: 'completed' },
    { nameTodo: 'belajar golang', status: 'completed' },
    { nameTodo: 'belajar next js', status: 'completed' },
  ],
};

function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        data: [...state.data, action.payload],
      };
    case UPDATE_TODO:
      const { id } = req.params;
      const { name, email, password } = req.body;
      const index = users.findIndex((user) => user.id == id);
      users[index].name = name;
      users[index].email = email;
      users[index].password = password;
      return {
        data: 'test',
      };
    case DELETE_TODO:
      return {
        data: state.data.filter((item, index) => index !== action.payload),
      };
    default:
      return state;
  }
}
export default todoListReducer;

// delete
// const { id } = req.params;
// let usersFiltered = users.filter((x) => {
//   return x.id != id;
// });
// users = usersFiltered;

// create
// const data = req.body;
// users.push(data);
