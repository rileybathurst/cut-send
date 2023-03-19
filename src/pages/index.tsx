import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';

import Header from '../components/header';

// TODO: name
function Rect(props) {
  let plate = 10 // this is the locked size of the outer plate
  let perRow = plate / props.width; // how many fit per row
  let floor = Math.floor(perRow); // round down to the nearest whole number

  let row = (props.i / floor); // the number divided by the number of boxes per row
  let which = Math.floor(row);

  let x = props.width * props.i - props.width * which * floor;

  let y;
  if (which > 0) {
    y = (props.height * which);
  }

  return (
    <rect
      x={x}
      y={y}
      rx={props.radius}
      width={props.width}
      height={props.height}
    />
  )
}

function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0; }
  return parsed;
}

const ThirdPage = () => {

  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(2);
  const [radius, setRadius] = useState(1);
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(10);
  const [number, setNumber] = useState(1);
  const [bigger, setBigger] = useState(5);
  const [oversize, setOversize] = useState(false);

  let howMany = Array.from(Array(roughScale(number, 10)).keys());

  function widthCm(e) {
    setWidth(e.target.value);
    return null;
  }

  function heightCm(e) {
    setHeight(e.target.value);
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

  useEffect(() => {
    setSize(width * height); // + breaks this it might have to be flipped
    setPrice(size * 1.75); // TODO this becomes a variable // this isnt happening last

    if (height > width) {
      setBigger(height / 2);
    } else {
      setBigger(width / 2);
    }

    if (size > 10) {
      setOversize(true);
    }
  }, [width, height, price, size]);

  return (
    <>
      <Header />

      <main>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo eros, semper eget semper non, viverra pulvinar magna. Ut tincidunt dui purus, in pulvinar arcu ullamcorper.</p>

        <form
          name="send"
          method="POST"
          data-netlify="true"
          action="/success"
          netlify-honeypot="bot-field"
        >

          <input type="hidden" name="form-name" value="send" />

          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <input type="hidden" name="size"
            value="New Size order from Cut &amp; Send" />

          <div className='form_input'>
            <label>
              <span className='input__name'>Width: </span>
              <input type="range" id="width" name="width" min="1" max="10" value={width} onChange={widthCm} />
              <span className='input__state'>{width}{/* // TODO: small space */}mm</span>
            </label>
          </div>

          <div className='form_input'>
            {/* https://reactjs.org/docs/forms.html */}
            <label>
              <span className='input__name'>Height: </span>
              <input type="range" id="height" name="height" min="1" max="10" value={height} onChange={heightCm} />
              <span className='input__state'>{height}{/* // TODO: small space */}mm</span>
            </label>
          </div>

          <div className='form_input'>

            <label>
              <span className='input__name'>Radius: </span>
              <input type="range" id="radius" name="radius" min="0" max={bigger} step="0.5" value={radius} onChange={radiusCm} />
              <span className='input__state'>{radius}{/* // TODO: small space */}mm</span>
            </label>
          </div>

          <div className='form_input'>

            <label>
              <span className='input__name'>Number: </span>
              <input
                type="range"
                id="number"
                name="number"
                min="1"
                max="10"
                value={number}
                onChange={numberSet}
              />
              <span className='input__state'>{number}</span>
            </label>

          </div>

          <hr />

          <div className='form_static'>
            <p>Size</p>
            {size}&#13217;
            {/* // TODO: mm squared */}
          </div>
          <hr />

          <div className='form_static'>
            <p>Price</p>
            ${price}
            {/* // TODO: NZ dollars somewhere on the page */}
          </div>

          <hr />

          <div className='preview'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
            // className='clrs'
            >
              {
                howMany.map((i) => (
                  <Rect
                    key={i}
                    i={i}
                    width={width}
                    height={height}
                    radius={radius}
                    number={number}
                  />
                ))
              }
            </svg>
            <button
              type="submit"
              className='button__primary'
            >
              Send
            </button>
          </div>


        </form>




      </main>
      <Footer />
    </>
  )
}

export default ThirdPage
