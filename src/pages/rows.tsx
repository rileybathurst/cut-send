import React from 'react';

function NeedsProps(props) {


  // this is rad works on 3 4 and 5

  let height = 2;

  // * these all work
  // let width = 5;
  // let width = 4;
  // let width = 3;
  let width = 2

  let numberPerRow = 4; // ! change this for each

  let x;

  x = (width * props.i) - (width * (props.row * numberPerRow));

  let y;
  if (props.row > 0) {
    y = (height * props.row);
  }

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
    />
  )
}

const RowsPage = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>


      <main>
        <p>an idea about building out rows as a variable everything has</p>
        {/* // * hard coding 3 5x5 rectangles */}
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <NeedsProps i='0' row="0" />
          <NeedsProps i='1' row="0" />
          <NeedsProps i='2' row="1" />
          <NeedsProps i='3' row="1" />
          <NeedsProps i='4' row="2" />
          <NeedsProps i='5' row="2" />
          <NeedsProps i='6' row="3" />
          <NeedsProps i='7' row="3" />
          <NeedsProps i='8' row="4" />
          <NeedsProps i='9' row="4" />
        </svg>

        <hr />

        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <NeedsProps i='0' row="0" />
          <NeedsProps i='1' row="0" />
          <NeedsProps i='2' row="0" />
          <NeedsProps i='3' row="1" />
          <NeedsProps i='4' row="1" />
          <NeedsProps i='5' row="1" />
          <NeedsProps i='6' row="2" />
          <NeedsProps i='7' row="2" />
          <NeedsProps i='8' row="2" />
          <NeedsProps i='9' row="3" />
        </svg>

        <hr />

        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <NeedsProps i='0' row="0" />
          <NeedsProps i='1' row="0" />
          <NeedsProps i='2' row="0" />
          <NeedsProps i='3' row="0" />
          <NeedsProps i='4' row="1" />
          <NeedsProps i='5' row="1" />
          <NeedsProps i='6' row="1" />
          <NeedsProps i='7' row="1" />
          <NeedsProps i='8' row="2" />
          <NeedsProps i='9' row="2" />
        </svg>
      </main>

    </>
  )
}

export default RowsPage
