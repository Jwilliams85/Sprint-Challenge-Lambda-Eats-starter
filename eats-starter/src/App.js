import React from 'react';
import './App.css';
import Form from './components/Form';
//import Style from './components/Style';
import { Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Lambda's Pizzeria</h1> 
      <h2>Build Your Own Pizza!!</h2>
      
      <Form />
  
    </div>
  );
}

export default App;
