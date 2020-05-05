import React from "react";
import { Link } from "react-router-dom";
import pizzaImg from '../img/Pizza.gif'
//import HomeStyle from './components/HomeStyle'

const Home = () => {
  
 
  return (
    <div className="home-wrapper">
        <h1 className="title">Lambda's Pizzeria</h1>
      <img
        className="home-image" src={pizzaImg} alt ="homepage_image" />
    <Link to ="/pizza">
        <button>
            Order Your Pizza!
        </button>    
    </Link>
    </div>
  );
}
export default Home;

//Photo by Chad Montano on Unsplash