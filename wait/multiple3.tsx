import React from 'react';

import Footer from '../components/footer';

function Plate() {

  return (
    <rect width="2" height="2" />
  )
}

const Multiple3Page = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>
      <main>
        <p>this needs to shift the x each time which is weirdly easier changing the size</p>
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">

          <Plate />
          <Plate />
        </svg>

      </main>
      <Footer />
    </>
  )
}

export default Multiple3Page
