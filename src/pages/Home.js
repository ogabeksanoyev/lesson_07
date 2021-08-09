import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import React from 'react'
import Header from '../containers/Header';
import datas from '../data'
import { Link } from 'react-router-dom';
import Container from '../containers/Container';

const Home = () => {
    return (
        <Container>
         
         <div className="container py-5">
         <h1 className="text-center">Bosh toifalar</h1>
                <div className="d-flex flex-wrap">
                        {
                            datas.glavni.map((value,index)=>{
                                return(
                                   <div className="items me-4" key={index}>
                                   <Link to={value.to} className="category ">
                                       <div className="link mb-4">
                                           <div className="circle" style={{backgroundColor: value.background}}>
                                               <img src={value.img} alt="" className="w-100"/>
                                           </div>
                                           <p>{value.title}</p>
                                       </div>
                                    </Link>
                                   </div>
                                )
                            })
                        }
                </div>
         </div>
        </Container>
    )
}

export default Home
