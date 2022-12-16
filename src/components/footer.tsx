import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className='footer__crown'>
        <p>Cut &amp; Send by Priest Sheetmetal</p>
        <p>&copy; {/* // TODO: date */}</p>
      </div>
      <ul>
        <li key="about"><Link to="/about">About</Link></li>
      </ul>
    </footer>
  )
}

export default Footer
