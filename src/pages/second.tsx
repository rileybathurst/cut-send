import React from 'react';

function NeedsProps(props) {
  let box = 10 // this is the locked size of the outer box
  let number = box / props.width; // how many fit per row
  let floor = Math.floor(number); // round down to the nearest whole number

  let row = (props.i / floor); // the number divided by the number of boxes per row
  let which = Math.floor(row);

  let x = (props.width * props.i) - (props.width * (which * floor));

  let y;
  if (which > 0) {
    y = (props.height * which);
  }

  return (
    <rect
      x={x}
      y={y}
      width={props.width}
      height={props.height}
    />
  )
}

const SecondPage = () => {
  let width = 3;
  let height = 1;

  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>


      <main>
        <p>an idea about building out rows as a variable everything has</p>
        {/* // * hard coding 3 5x5 rectangles */}
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <NeedsProps i='0' width={width} height={height} />
          <NeedsProps i='1' width={width} height={height} />
          <NeedsProps i='2' width={width} height={height} />
          <NeedsProps i='3' width={width} height={height} />
          <NeedsProps i='4' width={width} height={height} />
          <NeedsProps i='5' width={width} height={height} />
          <NeedsProps i='6' width={width} height={height} />
          <NeedsProps i='7' width={width} height={height} />
          <NeedsProps i='8' width={width} height={height} />
          <NeedsProps i='9' width={width} height={height} />
        </svg>
      </main>
    </>
  )
}

export default SecondPage
