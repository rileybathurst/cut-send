import React, { useRef, useState, useEffect } from 'react';

import { jsPDF } from "jspdf";
import { Canvg } from 'canvg';

class PDFBuild extends React.Component {

  componentDidUpdate() {

    // * I think I can run defaults at this stage
    // defaults // orientation: 'p', // unit: 'mm', // format: 'a4', // putOnlyUsedFonts:true
    const doc = new jsPDF();

    let name = 'test';
    doc.text(name, 50, 10); // these are mm so not similar to sierra plans

    // a canvas image
    doc.addImage(this.props.data, 'png', 50, 20, 75, 80);

    let filename = `triangle`;

    doc.save(filename); // ! turned off for testing
  }

  render() {
    return null;
  }
}

const PDFPage = () => {

  const [dataState, setDataState] = useState(' ');

  // do not name this it breaks the build
  const canvas = useRef(null);

  useEffect(() => {

    let svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><polygon points="0,10 5,2.5 5,7.5 10,0" /></svg>';

    // console.log(canvas?.current);
    // console.log(canvas?.current.getContext("2d"));

    // grab the canvas and edit it with the useeffect to only do it once its drawn
    const ctx = canvas?.current?.getContext("2d");
    const v = Canvg.fromString(ctx, svg);
    v.start();

    // base64 encode the canvas image
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
    const dataURL = canvas?.current.toDataURL();
    setDataState(dataURL);


  });

  return (
    <main className='pdf'>
      <canvas
        ref={canvas}
        width="250" height="250"
      />

      <PDFBuild
        // try send less arguments and grab them above as we need everything
        // plan={props.plan}

        // image prop
        data={dataState}
      />
      <h1>Triangle</h1>

      <img
        src={dataState}
        alt="the svg but its an image"
        className="data"
      />
    </main>
  )
}

export default PDFPage
