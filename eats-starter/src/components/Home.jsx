import React from "react";
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';

function Home(props) {
  /* 
  useHistory() taps into the history API and provides an object as described here: https://reacttraining.com/react-router/web/api/history
  we will usually use "push" and "goBack" from the history object to navigate when a Link is not available to us. 
  */
  const history = useHistory();
  console.log(history);
 
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
      />
    </div>
  );
}
export default Home;