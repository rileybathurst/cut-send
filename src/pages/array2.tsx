
import React from 'react';

import Footer from '../components/footer';

function Number() {
  const texts = ['one', 'two'];

  Array.from(Array(10).keys())
  console.log(Array);

  let ten = Array.from(Array(10).keys())
  console.log(ten);

  return (
    <>
      {
        ten.map((i) => (
          <div>numbers</div>
        ))
      }
    </>
  );
}

const Array2Page = () => {
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

export default Array2Page
