import React, { useState, useEffect } from 'react';

function Plate() {
  const [width, setWidth] = useState(5);
  const [length, setLength] = useState(5);
  const [size, setSize] = useState(25);

  function widthCm(e) {
    setWidth(e.target.value);
    return null;
  }

  function lengthCm(e) {
    setLength(e.target.value);
    return null;
  }

  // this always run last
  useEffect(() => {

    setSize(width * length); // + breaks this it might have to be flipped
  }, [width, length]);


  return (
    <>
      <form name="size" method="POST" data-netlify="true">

        <input type="hidden" name="size"
          value="New Size order from Cut &amp; Send" />

        {/* // TODO react documentation on this */}
        <label>
          <input type="range" id="width" name="width" min="0" max="10" onChange={widthCm} />
          {width}</label>

        <hr />

        <label>
          <input type="range" id="length" name="width" min="0" max="10" onChange={lengthCm} />
          {length}</label>

        <hr />
        <h3>Size</h3>
        {size}&#13217;
        <hr />
        <button type="submit">Send</button>

      </form>
    </>
  )
}

const IndexPage = () => {
  return (
    <>
      <h1>Cut &amp; Send</h1>
      <Plate />
    </>
  )
}

export default IndexPage
