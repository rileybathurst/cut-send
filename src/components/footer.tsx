import React from 'react';
import { Link } from 'gatsby';
import PriestIcon from '../images/priest';

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className='footer__crown'>
        <PriestIcon />
        <p>&copy; {new Date().getFullYear()}</p>

      </div>
      {/* <ul>
        <li key="about"><Link to="/about">About</Link></li>
      </ul> */}
    </footer>
  )
}

export default Footer
