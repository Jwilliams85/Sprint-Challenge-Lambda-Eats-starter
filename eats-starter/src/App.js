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
     <div> 
     
    <Route exact path='/pizza' component={Form}></Route>
      
   <Route exact path="/" component={Home}/>
   <div>
      <Link to ={'/pizza'}>Order Your Pizza!</Link>
    </div>
   {/* <Link >
        <button>
          <br></br>
            Order Your Pizza!
        </button>    
    </Link> */}
   </div>
    </div>
  );
}

export default App;
