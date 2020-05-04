import React from 'react';
import './App.css';
import Form from './components/Form';
//import Style from './components/Style';
import { Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Lambda's Pizzeria</h1> 
      <h2>Build Your Own Pizza!!</h2>
     
     <nav>
       <div className="home-link"></div>
       </nav> 
      <Form />
  
    </div>
  );
}

export default App;
