
import React from 'react';

import Footer from '../src/components/footer';

// https://thewebdev.info/2021/05/28/how-to-repeat-an-element-n-times-with-react/
// I dont understand this

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
// ? square brackets are property accessors
// property accessors of what?

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copy_an_array
// ? copy an array

function App() {
  console.log(Array); // I guess this is prebuilt by react?
  const n = 2;
  return [...Array(n)].map(
    (i) => <span key={i}>-</span>
    // these keys dont work currently
  );
}


const Multiple4Page = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>

      <App />


      <Footer />
    </>
  )
}

export default Multiple4Page
