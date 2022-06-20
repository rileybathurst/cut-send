
import React, { useState } from 'react';

import Footer from '../components/footer';

function Plate(props) {
  return (
    <rect width={props.multiple} height="2" />
  )
}

function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0; }
  return parsed;
}

function Multiple(props) {
  // console.log(props.number);
  // console.log(roughScale(props.number, 10));
  // let multiple = props.number;

  return [...Array(roughScale(props.number, 10))].map(
    (i) => <Plate multiple={props.number} />
  );
}

function Number(e) {
  const [number, setNumber] = useState(1);

  function numberSet(e) {
    setNumber(e.target.value);
    return null;
  }

  return (
    <main>
      <form>
        <label>
          Number:
          <input
            type="range"
            id="number"
            name="number"
            min="0"
            max="2"
            value={number}
            onChange={numberSet}
          />
          {number}
        </label>
      </form>

      <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <Multiple number={number} />
      </svg>
    </main>
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




      </main>

      <Footer />
    </>
  )
}

export default Multiple5Page
