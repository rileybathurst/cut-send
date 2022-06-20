import React, { useState, useEffect } from 'react';

import Footer from '../components/footer';

function Plate() {
  const [width, setWidth] = useState(5);
  const [length, setLength] = useState(5);
  const [radius, setRadius] = useState(0);
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(10);

  function widthCm(e) {
    setWidth(e.target.value);
    window.onload = (event) => {
      // stay gold
    }
    return null;
  }

  function lengthCm(e) {
    setLength(e.target.value);
    return null;
  }

  function radiusCm(e) {
    setRadius(e.target.value);
    return null;
  }

  // this always run last
  useEffect(() => {
    setSize(width * length); // + breaks this it might have to be flipped
    setPrice(size * 1.75); // TODO this becomes a variable // this isnt happening last
  }, [width, length, price, size]);

  return (
    <main>
      <form name="size" method="POST" data-netlify="true">

        <input type="hidden" name="size"
          value="New Size order from Cut &amp; Send" />

        {/* // TODO react documentation on this */}
        <label>
          Width:
          <input type="range" id="width" name="width" min="0" max="10" value={width} onChange={widthCm} />
          {width}</label>

        <hr />

        <label>
          Length:
          <input type="range" id="length" name="length" min="0" max="10" value={length} onChange={lengthCm} />
          {length}</label>

        <hr />

        <label>
          Radius:
          <input type="range" id="radius" name="radius" min="0" max="5" step="0.5" value={radius} onChange={radiusCm} />
          {radius}</label>

        <hr />
        <h3>Size</h3>
        {size}&#13217;
        <hr />

        ${price}

        <hr />
        <button type="submit">Send</button>

      </form>

      <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <rect
          width={width}
          height={length}
          rx={radius}
        // ry='20' // I think Im gonna hold off on this for now
        />
      </svg>
      {/* <Price size={size} /> */}
    </main>
  )
}

const ThreePage = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>
      <Plate />
      <Footer />
    </>
  )
}

export default ThreePage
