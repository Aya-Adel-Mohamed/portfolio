import React from 'react';
import {Link} from 'react-router-dom'
import NavTop from '../NavTop/NavTop';
import styles from '../NotFound/NotFound.module.css';

export default function NotFound() {
  return (
    <>
    <section className={`${styles.bgNotFound} vh-100 d-flex align-items-center justify-content-center flex-column`}>
    <NavTop title='Not Found'/>
    <div className="container text-white">
    <div className="row text-center">
    <div className={`col ${styles.notfound}`}>
     <h1 >404</h1>
     <h3>Error: Page Not Found</h3>
     <p>We can't find the page you're looking for.</p>
     <p>return to <Link to='/' className={styles.colorhome}>Home Page</Link></p>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}
