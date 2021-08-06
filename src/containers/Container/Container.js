import './Container.css'
import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Containerr = (props) => {
    return (
        <div>
            <Header/>
             {props.children}
            <Footer/>
        </div>
    )
}

export default Containerr
