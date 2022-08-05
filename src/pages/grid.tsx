import React, { useState, useEffect } from 'react';

const GridPage = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>
      <div className='svg-grid'>
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

export default GridPage
