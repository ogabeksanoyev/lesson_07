import './home.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
import Containerr from '../../Container'
import Header from '../../Header'

const data = [
    {
        title:"Детский мир",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
        to:"detskiy-mir",
        color:"#ffce32"
    },
    {
        title:"Недвижимость",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
        to:"mulk",
        color:"#3a77ff"
    },
    {
        title:"Транспорт",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
        to:"transport",
        color:"#23e5db"
    }
]

const Home = () => {
    return (
        <div>
            <Header/>
         <div className="container py-5">
            <h1 className="text-center">Главные категории</h1>
            <div className="d-flex flex-wrap">
                {
                    data.map(v => <Link to={v.to} className="category m-2">
                       <div className="circle mx-auto" style={{ backgroundColor: v.color }}>
                          <img src={v.img} alt="" className=" w-100"/>
                       </div>
                       <p className="w-100 text-center">{v.title}</p>
                    </Link> 
                )}
            </div>
          </div>
        </div>

    )
}

export default Home
