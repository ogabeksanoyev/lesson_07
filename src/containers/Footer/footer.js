import './Footer.css';
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
             <div className="container">
                 <div className="row">
                     <div className="col-md-4 col-6">
                         <ul>
                             <Link to={"/"} className="d-block  mb-2">  Mobil ilovalar </Link>
                             <Link to={"/"} className="d-block  mb-2">  Yordam </Link>
                             <Link to={"/"} className="d-block  mb-2">  Pullik xizmatlar</Link>
                             <Link to={"/"} className="d-block  mb-2">  OLX-da biznes </Link>
                             <Link to={"/"} className="d-block  mb-2"> Saytda reklama </Link>
                             <Link to={"/"} className="d-block  mb-2">  Foydalanish shartlari </Link>
                             <Link to={"/"} className="d-block  mb-2"> Maxfiylik siyosati </Link>
                         </ul>
                     </div>
                     <div className="col-md-4 col-6">
                         <ul>
                             <Link to={"/"} className="d-block  mb-2">  Qanday sotib olish va sotish?</Link>
                             <Link to={"/"} className="d-block  mb-2"> Xavfsizlik qoidalari </Link>
                             <Link to={"/"} className="d-block  mb-2">  Sayt xaritasi</Link>
                             <Link to={"/"} className="d-block  mb-2">  Mintaqalar xaritasi</Link>
                             <Link to={"/"} className="d-block  mb-2"> Ommaviy so‘rovlar …da Ish</Link>
                             <Link to={"/"} className="d-block  mb-2">  Foydalanish shartlari </Link>
                             <Link to={"/"} className="d-block  mb-2"> Maxfiylik siyosati </Link>
                         </ul>
                     </div>
               
                 </div>
             </div>
        </footer>
    )
}







export default Footer
