import React, {useState} from 'react'
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <FontAwesomeIcon icon="fa-solid fa-check-square" />
            <Link to="/" className="navbar-logo">
                TRVL <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon'>
                <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
