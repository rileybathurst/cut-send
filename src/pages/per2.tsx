import React from 'react';

function WhichRow(props) {
  let box = 10 // this is the locked size of the outer box
  let number = box / props.width; // how many fit per row
  let floor = Math.floor(number); // round down to the nearest whole number
  // console.log(floor); // check it works

  let row = (props.i / floor); // the number divided by the number of boxes per row
  // console.log(row);
  let which = Math.floor(row);

  return (
    <p>
      {which}
    </p>
  )
}

const Per2Page = () => {
  let width = 6;

  return (
    <>
      {/* <Char /> */}
      <header>
        <h1>Cut &amp; Send</h1>
      </header>

      <main>

        <WhichRow i="0" width={width} />
        <WhichRow i="1" width={width} />
        <WhichRow i="2" width={width} />
      </main>

    </>
  )
}

export default Per2Page
