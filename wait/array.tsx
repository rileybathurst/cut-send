
import React from 'react';

import Footer from '../src/components/footer';

function Number() {
  const texts = ['one', 'two'];
  console.log(texts);
  return (
    <>
      {
        texts.map((text) => (
          <div>numbers</div>
        ))
      }
    </>
  );
}

const ArrayPage = () => {
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

export default ArrayPage
