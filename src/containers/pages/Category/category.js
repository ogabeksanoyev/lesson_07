import './category.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../Header';
import Footer from '../../Footer';
import datas from '../../../data'

const Category = () => {
    const {category} = useParams();

    const data = datas[category]
    
    return (
        <div>
        <Header/> 
           <div className="container">
              <h1 className="my-5 text-center">Category:{category}</h1>
            <div className="row">
                {
                    data.map(v => <div  className="col-md-3" >
                        <div className="shadow h-100  rounded prodect p-2">
                         <img className="w-100 mb-3" src={v.img} alt="" />
                         <p className="fw-bold">{v.title}</p>
                         <span>{v.price}</span> <br />
                         <span>{v.location}</span>
                    </div>
                    </div>)
                }
            </div>
           </div>
        {/* <Footer/> */}
        </div>
    )
}

export default Category
