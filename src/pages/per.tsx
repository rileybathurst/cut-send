import React from 'react';

function Per(props) {

  let width = 6;
  let box = 10

  let number = box / width;

  let floor = Math.floor(number);

  return (
    <>
      {floor}
    </>
  );
}

const PerPage = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>


      <Per />

    </>
  )
}

export default PerPage
