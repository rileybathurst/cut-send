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

// I dont know if this is a function maybe its a component
function TriTop(z: number) {
  if (z === 0) {
    let TriTopper = 0;
    return TriTopper;
  } else {
    let TriTopper = z;
    return TriTopper;
  }
}

function TriBottom(z, height) {
  // if height is 0 then its just one and thats fine
  let TriBottomer = +z + +height;
  return TriBottomer;
}

// TODO: name
function Rect(props: { width: string | number | undefined; i: number; height: string | number | undefined; sides: string | number; radius: string | number | undefined; }) {
  let plate = 10 // this is the locked size of the outer plate
  let perRow = plate / props.width; // how many fit per row
  let floor = Math.floor(perRow); // round down to the nearest whole number

  let row = (props.i / floor); // the number divided by the number of boxes per row
  let which = Math.floor(row);

  let x = props.width * props.i - props.width * which * floor;

  let y = 0;
  if (which > 0) {
    y = (props.height * which);
  }

  // start with the default rect
  if (props.sides === 4 || props.sides === "4") {
    return (
      <rect
        x={x}
        y={y}
        rx={props.radius}
        width={props.width}
        height={props.height}
        stroke="black"
        strokeWidth="0.05"
      />
    )
  } else if (props.sides === "3") {

    let triWidth = props.width / 2;
    let TriStart = x;
    let TriMid = x + triWidth;
    // stupid JS
    let TriEnd = +x + +props.width;

    // I was having problems with undefined and wrong props so I went through a function
    let Tippy = TriTop(y);

    let BottomPass = {
      z: y,
      height: props.height
    }

    // TODO: Naming
    let Toppy = TriBottom(BottomPass.z, BottomPass.height);
    // console.log(Toppy); // returns an object?

    return (
      <>
        {/*
// leave here for checking the shape
<rect
          x={x}
          y={y}
          rx={props.radius}
          width={props.width}
          height={props.height}
        /> */}
        {/* // * Triangle */}
        <polygon
          points={`
            ${TriStart}, ${Toppy}
            ${TriMid}, ${Tippy}
            ${TriEnd}, ${Toppy}
          `}
          stroke="black"
          strokeWidth="0.05"
        // fill="orange"
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
        stroke="black"
        strokeWidth="0.05"
      />
    );
  }
}


// ? what did I do here can I document it
// write documentation for function roughScale
function roughScale(x: string | number, base: number | undefined) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0; }
  return parsed;
}

const PolygonPage = () => {

  // const [width, setWidth] = useState(5); // ! testing
  const [width, setWidth] = useState(6); // ! testing
  const [height, setHeight] = useState(2);
  const [radius, setRadius] = useState(1);
  const [radiusAble, setRadiusAble] = useState(true);
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(10);
  // const [number, setNumber] = useState(1); // ! testing
  const [number, setNumber] = useState(2); // ! testing
  const [bigger, setBigger] = useState(5);
  const [oversize, setOversize] = useState(false);
  const [sides, setSides] = useState(4);

  // TODO: this is how to do the lines mapping
  let howMany = Array.from(Array(roughScale(number, 10)).keys());

  function widthCm(e: { target: { value: React.SetStateAction<number>; }; }) {
    setWidth(e.target.value);
    return null;
  }

  function heightCm(e: { target: { value: React.SetStateAction<number>; }; }) {
    setHeight(e.target.value);
    return null;
  }

  function radiusCm(e: { target: { value: number; }; }) {
    setRadius(e.target.value);
    return null;
  }

  function numberSet(e: { target: { value: React.SetStateAction<number>; }; }) {
    setNumber(e.target.value);
    return null;
  }

  // sides also have some repuccions
  function sideNum(e: { target: { value: number; }; }) {
    // setSides(e.target.value);
    // console.log(e.target.value);
    // console.log(sides);

    let integer = Number(e.target.value);
    // console.log(integer);

    // * only rectangles and circles can have radius
    if (integer === 4 || integer === 1) {
      setRadiusAble(true);
      setSides(integer);

      // * starting at a circle and going to a triangle
      // ! theres a bug in this where it bounces and does both
    } else if (integer === 2 && sides === 1) {
      // if you try make a 2 sided object from a circle itll give you a triangle
      // console.log(e.target._wrapperState.initialValue);
      // console.log('🦄');
      setRadiusAble(false);
      setSides(3);

      // * starting at a triangle and going to a circle
    } else if (integer === 2 && sides >= 3) {
      // console.log('🦖');
      setSides(1);
      setRadiusAble(false);

      // * default
    } else {
      setRadiusAble(false);
      setSides(integer);
    }
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
                <span className='input__name'>Sides: </span>
                <input type="range" id="sides" name="sides" min="1" max="10" value={sides} onChange={sideNum} />
                <span className='input__state'>{sides}</span>
              </label>
            </div>

            {/* // this can come and go so it needs to be below the sides */}
            <div className={`form_input radius_input ${radiusAble}`}>
              <label>
                <span className='input__name'>Radius: </span>
                <input type="range" id="radius" name="radius" min="0" max={bigger} step="0.5" value={radius} onChange={radiusCm} />
                <span className='input__state'>{radius} mm
                </span>
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
            </div>
            <hr />

            <div className='form_static'>
              <p>Price</p>
              ${price}
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
        </section >




      </main >
      <Footer />
    </>
  )
}

export default PolygonPage
