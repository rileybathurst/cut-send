import React, { useState, useEffect } from 'react';

import Footer from '../components/footer';

function Start() {
  const [width, setWidth] = useState(5);

  function widthCm(e) {
    setWidth(e.target.value);
    console.log(e.target.value);
  }

  window.onload = (event) => {
    // stay gold
  };

  return (
    <form>
      <label>
        Start at half:<br />
        <input
          type="range"
          id="width"
          name="width"
          min="0"
          max="10"
          // by removing these I go back to default start at 50/100 and that works but needs a little more math to get the end number right
          value={width}
          onChange={widthCm}
        />
        {width}
      </label>
    </form>
  );
}

const StartPage = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>

      <main>
        <Start />
      </main>

      <Footer />
    </>
  )
}

export default StartPage
