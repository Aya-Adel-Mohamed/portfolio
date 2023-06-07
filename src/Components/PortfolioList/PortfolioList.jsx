import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../PortfolioList/PortfolioList.module.css';
import Loading from '../Loading/Loading.jsx';
import NavTop from '../NavTop/NavTop';
import business from '../../assets/icons/business_contact.png';
import comvzhssmyverizon from '../../assets/icons/comvzhssmyverizon.png';
import graduation from '../../assets/icons/graduation_cap.png';
import chart from '../../assets/icons/pie_chart.png';
import safe from '../../assets/icons/safe.png';
import envelope from '../../assets/icons/envelope.png';

export default function PortfolioList() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[]);
  const portfolios = [
    {title:'Home', image: business,path:'/'},
    {title:'About Me', image: comvzhssmyverizon,path:'/about'},
    {title:'Education', image: graduation,path:'/education'},
    {title:'Skills', image: chart,path:'/skills'},
    {title:'Portfolio',image: safe,path:'/portfolio'},
    {title:'Contact', image: envelope,path:'/contact'},
];
console.log(portfolios)
  return (
    <>
    {loading?<Loading/>:<>
    <section id="portfolio" className={`${styles.bgcolor} d-flex align-items-center text-center`}>
    <NavTop title='Aya Adel'/>
    <div className="container px-5 pb-5">
    <div className="row gy-4 gx-5 my-5 my-md-0">
        {portfolios.map((portfolio,index)=>(
            <div key={index} className={`col-6 col-md-6 col-lg-4 ${styles.list}`}>
                <Link to={portfolio.path}>
                <div>
                    <img src={portfolio.image} className={`img-fluid ${styles.content} rounded-3 ${styles.imageport}`} alt=""/>
                </div>
                </Link>
                <h4 className={`mt-1 mb-4 ${styles.title}`}>{portfolio.title}</h4>
            </div> 
            )
        )}   
    </div>
    </div>
    </section>
    </>}

    </>
  )
}
