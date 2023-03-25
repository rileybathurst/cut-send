import React, { useEffect, useRef } from 'react';

import CSTallIcon from '../images/cs-tall';
import CSWideIcon from '../images/cs-wide';

function LogoChanger() {
  const ref = useRef();

  useEffect(() => {

    // check what im dealing with
    console.log(ref.current);

    createObserver();

    function createObserver() {
      let observer;

      let options = {
        threshold: 0.1
      };

      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(ref.current);

      function handleIntersect(entries) {
        entries.forEach((entry) => {
          // if the ref is in view
          if (entry.intersectionRatio > 0.1) {
            ref.current.classList.add("in-view");
            ref.current.classList.remove("out-view");
          } else {
            ref.current.classList.remove("in-view");
            ref.current.classList.add("out-view");
          }
        });
      }
    }
  }, []);

  return (
    <header
      ref={ref}
    >
      {/* <div className='menu'>
          // TODO
          <button>MENU</button>
        </div> */}
      <hgroup className='sr-only'>
        <h1>Cut &amp; Send</h1>
        <h2>
          <a
            href="https://priestsheetmetal.co.nz"
            target='_blank' rel='noopener noreferrer'
          >
            By Priest Sheetmetal
          </a>
        </h2>
      </hgroup>
      <CSTallIcon className="" />
      <CSWideIcon />
      {/* <div className='profile'>
          // TODO
          <button>SIGN IN</button>
        </div> */}
    </header>
  );
}

function Menu() {
  return (
    <nav>

    </nav>
  )
}

const Header = () => {
  return (
    <>
      <Menu />
      <LogoChanger />

      <hr />
    </>
  )
}

export default Header
