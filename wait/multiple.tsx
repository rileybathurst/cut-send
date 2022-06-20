import React from 'react';

import Footer from '../components/footer';

function Plate() {

  // ? this doesnt work
  let re = '<rect width="10" height="10" />';

  return (
    <main>
      <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        {re}
      </svg>
    </main>
  )
}

const MultiplePage = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>
      <Plate />
      <Footer />
    </>
  )
}

export default MultiplePage
