import React, { useEffect, useState } from 'react';
import styles from '../AboutMe/AboutMe.module.css';
import NavTop from '../NavTop/NavTop.jsx';
import Loading from '../Loading/Loading';



export default function AboutMe() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[]);

  return (
    <>
    {loading?<Loading/>:<>
    <section id="about"className={`${styles.bgabout} d-flex align-items-center`}>
    <NavTop title='About Me'/>
    <div className="container px-4">
      <div className="row align-items-center gy-5">
        <div className="col-lg-4 px-5 pt-5 pt-lg-0">
          <div className="content-about text-center d-flex justify-content-center">
            <a href="https://drive.google.com/file/d/1r_25jJOa_CoxlnmF8KUlj_h2XYsPtNRr/view?usp=sharing"rel="noreferrer" target={'_blank'}className='text-decoration-none'>
          <div className={`${styles.aboutitem} position-relative`}>
          <i className='text-white me-2 fa-3x fa fa-download d-block fa-fade'></i>
            <h4 className='fs-6 fw-semibold text-white mt-2'>DownLoad CV</h4>
          </div>
          </a>
           
          </div>
        </div>
        <div className={`offset-lg-1 col-lg-7 ${styles.bgcontent } p-5 mb-5 rounded-4`}>
        <h4 className={`fs-5 fw-bolder ${styles.h4color} mb-4`}>BIT MORE ABOUT ME ?</h4>
        <p className={`${styles.paragraph} mb-0`}>Hello! i'm Aya Adel. junior Front-end developer with experience in building and maintaining responsive websites. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5 - CSS - CSS3 - SASS - Bootstrap 5 -JavaScript - jQuery and React Js.</p>
        <p className={`${styles.paragraph} mb-0`}>I worked withplugins like Owl Carousel.js - Slick.js - Wow.js - Aos.js and Skitter.js</p>
        <p className={`${styles.paragraph}`}>I have Knowledge of APIs, and Regular Expression</p>
        <ul className="p-0 mt-4">
        <li className="list-unstyled mb-2"><i className="fa-solid fa-envelope pe-3 fs-6"></i><a href="mailto:aya90318@gmail.com" className={`${styles.paragraph} text-dark text-decoration-none`}>aya90318@gmail.com</a></li>
        <li className="list-unstyled mb-2"><i className="fa-brands fa-github pe-3 fs-6"></i><a href="https://github.com/Aya-Adel-Mohamed" className={`${styles.paragraph} text-dark text-decoration-none`}>https://github.com/Aya-Adel-Mohamed</a></li>
        <li className="list-unstyled mb-2"><i className="fa-solid fa-phone pe-3 fs-6"></i><small className={`text-dark ${styles.paragraph}`}>+20 1115262756</small></li>
        <li className="list-unstyled mb-2"><i className="fa-solid fa-phone pe-3 fs-6"></i><small className={`text-dark ${styles.paragraph}`}>+20 01067258290</small></li>
        <li className="list-unstyled"><i className="fa-solid fa-location-dot pe-3 fs-6"></i><small className={`text-dark ${styles.paragraph}`}>4 Khalid Bin EL-Waleed from EL-Zhoor, Alexandria, Egypt</small></li>
        </ul>
        </div>
      </div>
    </div>
    </section>
    </>}
   
    </>
  )
}

