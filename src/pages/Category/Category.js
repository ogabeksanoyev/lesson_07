import 'bootstrap/dist/css/bootstrap.min.css';
import './Category.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../containers/Container';
import datas from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Category = () => {
    const { category } = useParams();
    const data = datas[category]
    console.log(data);
    console.log(useParams());
    return (
        <Container>
           <div className="container py-5">
           <h1>Category : { category }</h1>
           <div className="row mt-5 justify-content-center">
               {
                   data.map((v,i)=>{
                       return(
                           <div className="col-lg-3 col-md-4 col-sm-6 col-10 mb-3">
                               <div className="cards shadow">
                                   <img src={`${v.img != "" && v.img || 'https://images.pexels.com/photos/3297593/pexels-photo-3297593.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }`}  className="w-100" />
                                   <span className="card_title">{v.title}</span>
                                   <span className="card_location">{v.location}</span>
                                   <div className="d-flex card_b align-items-center justify-content-between">
                                    <span className="card_price">{v.price}</span>
                                    <FontAwesomeIcon icon={faHeart}/>
                                   </div>
                               </div>
                           </div>
                       )
                   })
               }
           </div>
           </div>
        </Container>
    )
}

export default Category
