
import React, { useState } from 'react';

import Footer from '../components/footer';

function Plate() {
  return (
    <rect width="2" height="2" />
  )
}

function Multiple(props) {
  const [multiple, setMultiple] = useState(2);
  // const n = 2;
  return [...Array(multiple)].map(
    (i) => <Plate />
  );
}

function Number(e) {
  const [number, setNumber] = useState(1);

  function numberSet(e) {
    setNumber(e.target.value);
    return null;
  }

  return (
    <form>
      <label>
        Number:
        <input
          type="range"
          id="number"
          name="number"
          min="0"
          max="2"
          onChange={numberSet}
        />
        {number}
      </label>
    </form>
  );
}

const Multiple5Page = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>

      <Number />
      <main>
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <Multiple />
        </svg>


      </main>

      <Footer />
    </>
  )
}

export default Multiple5Page
