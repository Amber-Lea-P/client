
import { Link } from 'react-router-dom';
import React from 'react'
import Header2 from './Header2';

const Header = (props) => {
  return (
    <> 
    <Header2 appName={props.appName}></Header2>
     <nav class="navbar bg-dark">
    <h1>
        <Link to="/"><i class="fas fa-code"></i>{props.appName}</Link>
    </h1>
        <ul>
            <li>
              <Link to= "/profiles">Developers</Link>
              </li>
            <li>
              <Link to="/register" class="btn" >Register</Link>
            </li>
            <li>
              <Link to="/login" class="btn">Login</Link>
            </li>
        </ul>
    </nav></>
  );
};

export default Header
 
     
      


