import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';

import Header from '../components/header';
import Lines from '../components/lines';

import { StaticImage } from "gatsby-plugin-image"

export function LaserCut() {
  return <StaticImage
    src="https://priest.s3.ap-southeast-2.amazonaws.com/cut-send/_DSC4909.jpg"
    alt="Metal laser cutter with high-precision cutting head that can cut metal and non-metal materials"
  />
}

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


  console.log(`x = ${x}`);
  console.log(`y = ${y}`);
  console.log(`width = ${props.width}`);

  // start with the default rect
  if (props.sides === 4 || props.sides === "4") {
    return (
      <rect
        x={x}
        y={y}
        rx={props.radius}
        width={props.width}
        height={props.height}
      />
    )
  } else if (props.sides === "3") {

    let triWidth = props.width / 2;
    let TriStart = x;
    let TriMid = x + triWidth;
    // stupid JS
    let TriEnd = +x + +props.width;

    // let TriTop = y;
    let TriTop = 0;
    if (y === undefined) {
      let TriTop = 0;
      console.log('🦄');
      console.log('triTop = 0');
    } else {
      let TriTop = y;
      console.log('🦖');
    }

    // let TriBottom = y + props.height;
    let TriBottom = props.height;
    if (y === undefined) {
      let TriBottom = props.height;
    } else {
      let TriBottom = y + props.height;
    }

    console.log(`TriTop = ${TriTop}`);
    console.log(`TriBottom = ${TriBottom}`);

    return (
      <>
        <rect
          x={x}
          y={y}
          rx={props.radius}
          width={props.width}
          height={props.height}
        />
        {/* // TODO: this does the first one but without the x and y
        // I need to move them more manually */}

        {/* // * First Triangle */}
        {/*         <polygon
          points={`
            0,${props.height}
            ${triWidth},0
            ${props.width},${props.height}
          `}
          fill="orange"
        /> */}

        {/* // * Triangle */}
        <polygon
          points={`
            ${TriStart},${TriBottom}
            ${TriMid},${TriTop}
            ${TriEnd},${TriBottom}
          `}
          fill="orange"
        />
      </>
    )
  } else {
    return (
      <rect
        x={x}
        y={y}
        rx={props.radius}
        width={props.width}
        height={props.height}
      />
    );
  }
}

function Polygon(props) {

  return (
    <polygon
      points="0,10 5,2.5 5,7.5 10,0"
      fill="orange"
    />
  )
}


// ? what did I do here can I document it
// write documentation for function roughScale
function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0; }
  return parsed;
}

const PolygonPage = () => {

  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(2);
  const [radius, setRadius] = useState(1);
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(10);
  const [number, setNumber] = useState(1);
  const [bigger, setBigger] = useState(5);
  const [oversize, setOversize] = useState(false);
  const [sides, setSides] = useState(4);

  // TODO: this is how to do the lines mapping
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

  function sideNum(e) {
    setSides(e.target.value);
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

        <section className='progression'>
          <article>
            <hgroup>
              <h3 className='eyebrow'>The Service</h3>
              <h2 className='supra'>Precision Cutting</h2>
            </hgroup>
            <p>Priest Sheetmetal is a company that offers custom metal cutting and fabrication services. Customers can send in their designs for any metal project, such as signs, sculptures, furniture, or machinery parts. Priest Sheetmetal will use their advanced equipment and skilled staff to cut and prepare the metal according to the specifications. The company can work with various types of metal, such as steel, aluminum, copper, brass, or stainless steel.</p>

            {/*  <p>Customers can choose from different finishes and coatings to enhance the appearance and durability of their metal products. Priest Sheetmetal guarantees high-quality workmanship and fast turnaround times for all orders.</p> */}
          </article>

          <LaserCut />

        </section>

        <section className='passage width-100'>

          <hgroup>
            <h3 className='eyebrow'>The Form</h3>
            <h2>Design Your Cut</h2>
          </hgroup>
          <form
          // name="send"
          // method="POST"
          // data-netlify="true"
          // action="/success"
          // netlify-honeypot="bot-field"

          >

            {/* // * this cures a bug when combining react 18 and netlify form */}
            {/* https://robertbattaglia.com/fixing-hydration-errors-from-netlify-forms/ */}
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

            {/* // TODO: Sides */}
            <div className='form_input'>
              <label>
                <span className='input__name'>Sides: </span>
                <input type="range" id="sides" name="sides" min="1" max="10" value={sides} onChange={sideNum} />
                <span className='input__state'>{sides}</span>
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
              <hgroup>
                <h3 className='eyebrow'>Preview</h3>
                <h2 className='supra'>Review The Result</h2>
              </hgroup>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
              // className='clrs'
              >
                {
                  howMany.map((i) => (
                    <>
                      <Rect
                        key={i}
                        i={i}
                        width={width}
                        height={height}
                        radius={radius}
                        number={number}
                        sides={sides}
                      />
                      {/*                       <Polygon
                        key={i}
                        i={i}
                        width={width}
                        height={height}
                        number={number}
                      /> */}
                    </>
                  ))
                }

                <Lines />
              </svg>

              <hgroup>
                <h3 className='eyebrow'>Send</h3>
                <h2 className='supra'>Ready To Go?</h2>
              </hgroup>

              <button
                type="submit"
                className='button__primary'
              >
                Send
              </button>
            </div>


          </form>
        </section>




      </main>
      <Footer />
    </>
  )
}

export default PolygonPage
