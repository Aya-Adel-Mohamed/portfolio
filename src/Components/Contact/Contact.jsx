import React, { useEffect, useState } from 'react';
import NavTop from '../NavTop/NavTop.jsx';
import styles from '../Contact/Contact.module.css';
import Loading from '../Loading/Loading.jsx';

export default function Contact() {
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
   <section className={`${styles.contact} d-flex align-items-center`}>
   <NavTop title='Contact'/>
  
    <div className="container pt-lg-0 pt-5">
      <div className="row align-items-center pt-lg-0 pt-5 gy-5">
        <div className={`col-lg-4 ${styles.bgcontact}`}>
          <h3 className={`text-white fs-3 ${styles.animated}`}>GET IN TOUCH</h3>
          <h3 className={`text-white mb-5 fs-3 ${styles.animate}`}>GET REAL</h3>
          <div className={`social-icons d-flex ${styles.animation}`}>
            <div className={`${styles.portfolioicons} d-flex align-items-center justify-content-center`}>
            <button className='btn'>
            <a href="https://github.com/Aya-Adel-Mohamed" className='text-white'target={'_blank'} rel="noreferrer"><i className='fab fa-github fs-6 fa-fade'></i></a>
            </button>
            </div>
            <div className={`${styles.portfolioicons} d-flex align-items-center justify-content-center`}>
            <button className='btn'>
            <a href="https://www.linkedin.com/in/aya-adel-11476623b" className='text-white'target={'_blank'} rel="noreferrer"><i className='fab fa-linkedin fs-6 fa-fade'></i></a>
            </button>
            </div>
            <div className={`${styles.portfolioicons} d-flex align-items-center justify-content-center`}>
              <button className='btn'>
            <a href="https://www.facebook.com/aya.adel.18062"className='text-white' target={'_blank'} rel="noreferrer"><i className='fab fa-facebook fs-6 fa-fade'></i></a>
            </button>
            </div>
          </div>
          <div className="contact-icons">
          <ul className="p-0 mt-4">
        <li className={`list-unstyled mb-2 ${styles.animation}`}><i className="fa-solid fa-envelope pe-3 fs-6 text-white"></i><a href="mailto:aya90318@gmail.com" className="fs-6 text-white text-decoration-none">aya90318@gmail.com</a></li>
        <li className={`list-unstyled mb-2 ${styles.animation}`}><i className="fa-solid fa-phone pe-3 fs-6 text-white"></i><small className='text-white fs-6'>+20 1115262756</small></li>
        <li className={`list-unstyled mb-2 ${styles.animation}`}><i className="fa-solid fa-phone pe-3 fs-6 text-white"></i><small className='text-white fs-6'>+20 01067258290</small></li>
        </ul>
          </div>
        </div>
        <div className="col-lg-7 offset-lg-1">
          <form className={`${styles.bgform} p-4 rounded-3 mb-lg-0 mb-5`}>
            <div className="form-group mb-3">
              <div className="col-sm-12">
                <input type="text" name="name" required className=' rounded-1 bg-dark py-1 px-2 border-dark form-control' placeholder='Your Name'/>
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="col-sm-12">
                <input type="text" name="subject" required className=' rounded-1 py-1 px-2  bg-dark form-control border-dark' placeholder='Subject'/>
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="col-sm-12">
                <input type="email" name="email" required className=' rounded-1 py-1 px-2  bg-dark form-control border-dark' placeholder='Your Email'/>
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="col-sm-12">
               <textarea name="message"  rows="5" className='rounded-1 bg-dark py-1 px-2  form-control border-dark' required placeholder='Your Message'></textarea>
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="col-sm-12">
                <button type='submit' name='submit' value='submit' className='btn btn-dark px-3 py-2 fs-6'>Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

   </section>
   </>}
   
   </>
  )
}
