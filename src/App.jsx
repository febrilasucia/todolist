import { useState } from 'react';
import './App.css';
import CategoryButton from './components/CategoryButton';
import FormInput from './components/FormInput';
import ListTodo from './components/ListTodo';

function App() {
  const [name, setName] = useState('febrilla Sucia');

  return (
    <div className="App">
      <FormInput name={name} />
      <CategoryButton />
    </div>
  );
}

export default App;
