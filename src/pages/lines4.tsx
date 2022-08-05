import React from 'react';

function NeedsProps(props) {

  let lines = 1; // ! change here

  let x;
  x = 5 * props.i;

  if ((x + 5) >= 11) {
    x = x - 10;
  }

  let y;

  if (props.i > 2) {
    // y = 5 * (1);
    y = 5 * ((props.i - 2) * lines); // needs to equal 1 // 3 - 2
  } else if (props.i > 0) {
    y = 5 * ((props.i - 1) * lines);
  }

  return (
    <rect
      x={x}
      y={y}
      width="5"
      height="5"
    />
  )
}

const Lines4Page = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>


      <main>
        <p>this works up to 4 squares by only changing the lines variable</p>
        {/* // * hard coding 3 5x5 rectangles */}
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <NeedsProps i='0' />
          <NeedsProps i='1' />
          <NeedsProps i='2' />
          <NeedsProps i='3' />
        </svg>
      </main>

    </>
  )
}

export default Lines4Page
