// TODO I know this doesnt work but its a maybe of an idea

import React from 'react';

import Footer from '../src/components/footer';

function Plate() {
  const btn = document.querySelector('button');
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  let WIDTH = document.documentElement.clientWidth;
  let HEIGHT = document.documentElement.clientHeight;

  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  function random(number) {
    return Math.floor(Math.random() * number);
  }

  function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,0,0,0.5)';
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  // btn.addEventListener('click', draw);

  return null;
}

const CanvasPage = () => {
  return (
    <>
      <header>
        <h1>Cut &amp; Send</h1>
      </header>
      <p>this needs to shift the x each time which is weirdly easier changing the size</p>
      <canvas>
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <Plate />
        </svg>

      </canvas>
      <Footer />
    </>
  )
}

export default CanvasPage
