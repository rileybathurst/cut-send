
import React from 'react';

import Footer from '../components/footer';

function Number() {
  console.log(Array);
  return (
    <>
      {
        [...Array(2)].map((i) => (
          <div>{i}</div>
        ))
      }
    </>
  );
}

const Array3Page = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>

      <Number />

      <Footer />
    </>
  )
}

export default Array3Page
