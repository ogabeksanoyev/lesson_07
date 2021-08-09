import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faStarHalf, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPeopleArrows, faPeopleCarry, faTheaterMasks } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
        <header className="header">
             <div className="container">
                 <div className="d-flex align-items-center justify-content-between">
                     <div className="logo">
                        <Link to="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" alt="" className="w-100" /></Link>
                     </div>
                     <div className="d-flex align-items-center">
                         <FontAwesomeIcon icon={faHeart} className="me-2 me-sm-5"/>
                         <a href="#" className="linkx"><FontAwesomeIcon icon={faUser} className="me-2"/> <span>Mening Profilm</span></a>
                         <a href="#" className="btn_x ms-2 ms-sm-5"><span>E'lon Berish</span></a>
                     </div>
                 </div>
             </div>
        </header>
       
    )
}

export default Header;
