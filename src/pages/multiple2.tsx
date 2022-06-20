import React from 'react';

import Footer from '../components/footer';

function Plate() {

  return (
    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
      <rect width="2" height="2" />
    </svg>
  )
}

const Multiple2Page = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>
      <main>
        <p>this is worse because I kinda want to stick to the size of a plate</p>
        <Plate />
        <Plate />
      </main>
      <Footer />
    </>
  )
}

export default Multiple2Page
