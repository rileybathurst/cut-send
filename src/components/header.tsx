import React from 'react';

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
        <div className='menu'>
          {/* // TODO */}
          <button>MENU</button>
        </div>
        <hgroup>
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
        <div className='profile'>
          {/* // TODO */}
          <button>SIGN IN</button>
        </div>
      </header>

      <hr />
    </>
  )
}

export default Header
