import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nvg.css';

export default function NVG() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            VOZDEINSIDE
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/togita'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                What is Gita
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Share with us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/signin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}


// import React from 'react';
// import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
// import './nvg.css'

// export default function NVG() {
//     return (
//         <nav className="navbar navbar-expand-lg ">
//             <a className="navbar-brand">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav">
//                     <li className="nav-item active">
//                         <Link className="nav-link" to="/">Home</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/emotion">Emotion</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/angry">Angry</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link disabled">Disabled</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     )
// }