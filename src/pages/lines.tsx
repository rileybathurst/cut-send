import React, { useState, useEffect } from 'react';

function Shape(props) {
  // console.log(props.i);
  // console.log(`{i = ${props.i}}`);

  // let oneless = props.i - 1;
  // console.log(`{oneless = ${oneless}}`);

  // console.log(`{height = ${props.height}}`);
  console.log(`{line = ${props.lines}}`);

  // testing as im getting a NaN
  // let first = (props.height * props.i);
  // console.log(`{first = ${first}}`);

  // let math = ((props.height * props.i) * props.lines);
  // console.log(`{math = ${math}}`);

  // this needs to be done before
  let math2 = ((props.height * props.i) * props.lines);
  console.log(`{math2 = ${math2}}`);
  // console.log(math2); // show it as a number

  let xStart = props.width * props.i;

  if (props.xBig === false) {
    console.log('xBig fl')
    let xStart = props.width * props.i;
    // tricky math goes here
  } else {
    console.log('xBig tr')
    // always new line
    let xStart = 0
  }

  console.log(xStart);

  return (
    <rect
      width={props.width}
      height={props.height}
      rx={props.radius}
      // x={props.width * props.i} // this now needs something including the lines
      // x={xStart}
      y={math2} // first should be * 0 but its not quite
    // y={props.lines}
    />
  )
}

function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0; }
  return parsed;
}

function Multiple(props) {

  let howMany = Array.from(Array(roughScale(props.number, 10)).keys())
  // console.log(howMany.length);

  return (
    <>
      {
        howMany.map((i) => (
          <>
            <Shape
              i={i}
              number={props.number}
              width={props.width}
              height={props.height}
              radius={props.radius}
              lines={props.lines}
              xBig={props.xBig}
            // lines={props.lines}
            />
            {i}
          </>
        ))
      }
    </>
  );
}

function Plate() {
  const [width, setWidth] = useState(5);
  const [length, setLength] = useState(5);
  const [radius, setRadius] = useState(0);
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(10);
  const [number, setNumber] = useState(1);
  const [lines, setLines] = useState(1);
  const [xBig, setXBig] = useState(false);

  function widthCm(e) {
    setWidth(e.target.value);
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

  function numberSet(e) {
    setNumber(e.target.value);
    return null;
  }

  // this always run last
  useEffect(() => {
    setSize(width * length); // + breaks this it might have to be flipped
    setPrice(size * 1.75); // TODO this becomes a variable // this isnt happening last

    // console.log(number);s
    if ((width * number) < 10) {
      setLines(0); // this is giving NaN?
    } else if ((width * number) > 10) {
      setLines(1); // this is giving NaN?
      // console.log(lines);
    } else if ((width * number) > 20) {
      setLines(2); // this is giving NaN?
      // console.log(lines);
    }

    // always start a new line
    if (width > 5) {
      setXBig(true);
    }

  }, [width, length, price, size, number, xBig]);

  return (
    <main>
      <form name="size" method="POST" data-netlify="true">

        <input type="hidden" name="size"
          value="New Size order from Cut &amp; Send" />

        {/* // TODO react documentation on this */}
        <label>
          Width:
          <input type="range" id="width" name="width" min="1" max="10" value={width} onChange={widthCm} />
          {width}</label>

        <hr />

        <label>
          Length:
          <input type="range" id="length" name="length" min="1" max="10" value={length} onChange={lengthCm} />
          {length}</label>

        <hr />

        <label>
          Radius:
          <input type="range" id="radius" name="radius" min="0" max="5" step="0.5" value={radius} onChange={radiusCm} />
          {radius}</label>

        <hr />

        <label>
          Number:
          <input
            type="range"
            id="number"
            name="number"
            min="1"
            max="4"
            value={number}
            onChange={numberSet}
          />
          {number}
        </label>

        <hr />
        <h3>Size</h3>
        {size}&#13217;
        <hr />

        ${price}

        <hr />
        <button type="submit">Send</button>

      </form>

      <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <Multiple
          width={width}
          height={length}
          radius={radius}
          number={number}
          lines={lines}
          xBig={xBig}
        />
      </svg>
      {/* <Price size={size} /> */}
    </main>
  )
}

const LinePage = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>
      <Plate />
    </>
  )
}

export default LinePage
