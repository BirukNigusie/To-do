/* eslint-disable react/prop-types */
import firebase from "firebase/compat/app"
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel } from '@mui/material';
import Todo from './Todo';
import db from "./firebase";
import "./index.css"
function App() {
  const id = nanoid().slice(0, 5);
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodo(snapshot.docs.map(doc => ({id:doc.id,text:doc.data().text})));
    });
  }, []);

  const addTodo = (event) => {
    setInput('');
    event.preventDefault();
    db.collection('todos').add({
      text:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodo([...todos, input]);
  };

  return (
    <div className="app">
      <form>
        <FormControl>
          <InputLabel>📌 Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button className="add-button"
          disabled={!input}
          onClick={addTodo}
          type='submit'
          variant="contained"
        >
          Add todo
        </Button>
      </form>
      <ul>
        {todos.map(item => (
          <li key={nanoid()}>
            <Todo text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;