import React from "react";
import { Link } from "react-router-dom";
import pizzaImg from '../img/Pizza.gif'
// import HomeStyle from './HomeStyle'
// import styled from 'styled-components'

// const title= styled.div`
// color="red"`;

const Home = () => {
  
 
  return (
    <div className="home-wrapper">
        <h1 className="title">Pizza?</h1>
      <img
        className="home-image" src={pizzaImg} alt ="homepage_image" />
   <div>
    <Link to ={'/'}>Home  </Link>
      <br></br>
        {/* <button>
          <br></br>
            Order Your Pizza!
        </button>     */}
    </div>
    {/* <div>
      <Link to ={'/pizza'}>Order Your Pizza!</Link>
    </div> */}
    {/* <Link to= '/pizza'>Pizza</Link> */}

    </div>
  );
}
export default Home;

//Photo by Chad Montano on Unsplash