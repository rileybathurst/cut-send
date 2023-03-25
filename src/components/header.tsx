import React from 'react';

import CSTallIcon from '../images/cs-tall';

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
      <header>
        {/* <div className='menu'>
          // TODO
          <button>MENU</button>
        </div> */}
        <hgroup>
          <h1 className='sr-only'>Cut &amp; Send</h1>
          <CSTallIcon />
          <h2 className='sr-only'>
            <a
              href="https://priestsheetmetal.co.nz"
              target='_blank' rel='noopener noreferrer'
            >
              By Priest Sheetmetal
            </a>
          </h2>
        </hgroup>
        {/* <div className='profile'>
          // TODO
          <button>SIGN IN</button>
        </div> */}
      </header>

      <hr />
    </>
  )
}

export default Header
