
import { Link } from 'react-router-dom';
import React from 'react'

const Header = () => {
  return (
    <>  <nav class="navbar bg-dark">
    <h1>
        <Link to="/"><i class="fas fa-code"></i>DevConnector</Link>
    </h1>
        <ul>
            <li><a class="btn" href="profiles.html">Developers</a></li>
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
 
     
      


