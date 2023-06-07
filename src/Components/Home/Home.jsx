import React, { useRef ,useEffect, useState } from 'react';
import Loading from '../Loading/Loading.jsx';
import Typed from 'typed.js';
import styles from '../Home/Home.module.css';

export default function Home() {
  const [loading,setLoading]=useState(false);
  const el = useRef(null);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
    
  },[]);
 
  useEffect(()=>{
    setTimeout(()=>{
      const typed = new Typed(el.current,{
        strings:['Front-end Developer React JS'],
        startDelay:200,
        typeSpeed:70,
        backSpeed:50,
      });
      return()=>{
        typed.destroy();
      };
    },2600)
  
  },[]);
  return (
    <>
    {loading?<Loading/>:<>
    <header className={`${styles.home} position-relative`}>
    <div className={`${styles.overlay} position-absolute top-0 bottom-0 end-0 start-0 d-flex flex-column justify-content-center align-items-center`}>
    <div className={`${styles.homeContent} text-white text-center`}>
        <h1>Aya Adel</h1>
        <p ref={el}></p>
        <div className="social-icons d-flex justify-content-center">
          <div className={`${styles.portfolioicons} d-flex align-items-center justify-content-center`}>
            <button className='btn'>
            <a href="mailto:aya90318@gmail.com"className='text-white'><i className='fa fa-envelope fs-6'></i></a>
            </button>
            </div>
            <div className={`${styles.portfolioicons} d-flex align-items-center justify-content-center`}>
            <button className='btn'>
            <a href="https://github.com/Aya-Adel-Mohamed" className='text-white'target={'_blank'} rel="noreferrer"><i className='fab fa-github fs-6'></i></a>
            </button>
            </div>
            <div className={`${styles.portfolioicons} d-flex align-items-center justify-content-center`}>
            <button className='btn'>
            <a href="https://www.linkedin.com/in/aya-adel-11476623b" className='text-white'target={'_blank'} rel="noreferrer"><i className='fab fa-linkedin fs-6'></i></a>
            </button>
            </div>
            <div className={`${styles.portfolioicons} d-flex align-items-center justify-content-center`}>
              <button className='btn'>
            <a href="https://www.facebook.com/aya.adel.18062"className='text-white' target={'_blank'} rel="noreferrer"><i className='fab fa-facebook fs-6'></i></a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>}
    
    </>
  )
}
