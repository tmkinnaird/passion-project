import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
     <nav>
        <Link className="nav-wordmark" to='/'>
          <h1>Green Thumb Home Page</h1>
        </Link>
        <Link className="nav-link" to='/about'>About</Link>
        <Link className="nav-link" to='/plants'>When To Plant</Link>
      </nav>

    )
}

      export default Navbar;