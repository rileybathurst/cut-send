import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer>
      <hr />
      <ul>
        <li key="home"><Link to="/">Home</Link></li>
        <li key="single"><Link to="/single">Single</Link></li>
        <li key="multiple"><Link to="/multiple">Multiple</Link></li>
        <li key="multiple2"><Link to="/multiple2">Multiple2</Link></li>
        <li key="multiple3"><Link to="/multiple3">Multiple3</Link></li>
        {/* <li key="multiple4"><Link to="/multiple4">Multiple4</Link></li>
        <li key="multiple5"><Link to="/multiple5">Multiple5</Link></li>
        <li key="multiple6"><Link to="/multiple6">Multiple6</Link></li> */}
        <li key="price"><Link to="/price">Price</Link></li>
        {/* <li key="canvas"><Link to="/canvas">Canvas</Link></li> */}
        {/* <li key="array"><Link to="/array">Array</Link></li> */}
        {/* <li key="array2"><Link to="/array2">Array2</Link></li> */}
      </ul>
    </footer>
  )
}

export default Footer
