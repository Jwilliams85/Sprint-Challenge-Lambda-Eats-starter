import React from 'react';
import './App.css';
import Form from './components/Form';
import styled from 'styled-components';
import { Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import {BrowserRouter} from 'react-router-dom'

const Title = styled.div`
color:red;
font-size:50px;
`;


function App() {
  

  return (
    <div className="App">
    <h1>Lambda's Pizzeria</h1> 
     <div> 
     
    <Route exact path='/pizza' component={Form}></Route>
      
   <Route exact path="/" component={Home}/>
   <div>
      <Link to ={'/pizza'} className="order">Order Your Pizza!</Link>
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
