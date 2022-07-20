import React, { useState } from "react";
// import { Form } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import BookComponents from "./components/BooksComponents";
import {add} from './redux/reduxBooks';
import './App.css';

function App() {
  let dispatch = useDispatch();
  const[kitob, setKitob] =useState({
    avtor: '',
    kitob: ''
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(add(kitob))
    setKitob ('')
    
  }
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setKitob((prev) => ({...prev, [name]:value}))
  }

  return (
    <div className="form_div">
      <form onSubmit={handleSubmit}>
    <h4>Yangi Kitob <br/> qo'shish</h4>
        <input type="text" placeholder="Avtor" name="avtor"  value={kitob.avtor || ''} onChange={handleChange}/> <br />
        <input type="text" placeholder="Kitob nomi" name="kitob" value={kitob.kitob || ''} onChange={handleChange} /> <br />

        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form> 
      <BookComponents/>
    </div>
  );
}

export default App;
