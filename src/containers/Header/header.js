import './header.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-dark text-white shadow w-100">
             <div className="container py-4 d-flex align-items-center">
                 <h3><Link to="/">OLX</Link></h3>
             </div>
        </header>
    )
}

export default Header
