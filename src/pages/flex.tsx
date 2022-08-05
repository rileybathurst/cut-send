import React, { useState, useEffect } from 'react';

const FlexPage = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>
      <div className='svg-flex'>
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="10" height="10" />
        </svg>
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="10" height="10" />
        </svg>
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" style={{ gridRow: '2' }}>
          <rect x="0" y="0" width="10" height="10" />
        </svg>
      </div>

      <hr />


      flex-grow
      flex-shrink
      flex-basis

      // I feel like this is going to go more backwards than forwards so its going to be harder

      <div className='svg-flex'>
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="10" height="10" />
        </svg>
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="10" height="10" />
        </svg>
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" style={{ gridRow: '2' }}>
          <rect x="0" y="0" width="10" height="10" />
        </svg>
      </div>
    </>
  )
}

export default FlexPage
