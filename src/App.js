import React from "react";
import { Button, Navbar, Card, CardImg } from 'reactstrap'
import { Route, Link } from 'react-router-dom'
import OrderForm from './Form'
const App = () => {
  return (
    <>
    <Navbar color='danger'>
    <h1 style= {{ color: 'white'}}>Lambda Eats</h1>
    <Link to= {'/'}>
    <Button color ='success'>
      Home
    </Button>
    </Link>
    </Navbar>
    <Route exact path = '/'>
    <Card>
      <CardImg src={require ('./Assets/Pizza.jpg')}/>
      <Link to = '/pizza'>
      <Button color= 'success' style = {{position: 'absolute', left:'50%', top: '50%'}}>Pizza?
    </Button>
    </Link>
    </Card>
    </Route>
    <Route path = '/pizza'>
      <OrderForm/>
    </Route>
      
     
    </>
  );
};
export default App;