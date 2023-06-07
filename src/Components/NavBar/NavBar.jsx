import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../NavBar/NavBar.module.css';
import business from '../../assets/icons/business_contact.png';
import comvzhssmyverizon from '../../assets/icons/comvzhssmyverizon.png';
import graduation from '../../assets/icons/graduation_cap.png';
import chart from '../../assets/icons/pie_chart.png';
import safe from '../../assets/icons/safe.png';
import envelope from '../../assets/icons/envelope.png';

export default function NavBar() {
  return (
    <>
    <div className={`${styles.sidebar} text-center d-flex`}>
        <button className={`btn ${styles.button}`} >
            <Link to='' className='position-relative'><img src= { business } alt="" className='fa-bounce' />
            <span className=' py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>Home</span>
            </Link>
        </button>
        <button className={`btn ${styles.button}`}>
            <Link to='about' className='position-relative'><img src= { comvzhssmyverizon } alt="" className='fa-bounce' />
            <span className='py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>About</span>
            </Link>
        </button>
        <button className={`btn ${styles.button}`}>
            <Link to='education' className='position-relative'><img src= { graduation } alt="" className='fa-bounce'/>
            <span className='py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>Education</span>
            </Link>
        </button>
        <button className={`${styles.fingerprint} rounded-circle`}>
            <Link to='list'><i  className={`text-white fa-solid fa-fingerprint ${styles.icon} fa-beat-fade`}></i></Link>
        </button>
        <button className={`btn ${styles.button}`}>
            <Link to='skills' className='position-relative'><img src= { chart } alt="" className='fa-bounce'/>
            <span className='py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>Skills</span>
            </Link>
        </button>
        <button className={`btn ${styles.button}`}>
            <Link to='portfolio' className='position-relative'><img src= { safe } alt="" className='fa-bounce'/>
            <span className='py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>Portfolio</span>
            </Link>
        </button>
        <button className={`btn ${styles.button}`}>
            <Link to='contact'className='position-relative'><img src= { envelope } alt="" className='fa-bounce'/>
            <span className='py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>Contact</span>
            </Link>
        </button>
    </div>
    </>
   
  )
}
