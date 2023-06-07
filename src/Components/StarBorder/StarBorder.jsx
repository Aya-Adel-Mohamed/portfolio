import React from 'react';
import styles from '../StarBorder/StarBorder.module.css';

export default function StarBorder() {
  return (
    <>
    <div className="header-contents pb-3 d-flex align-items-center justify-content-center w-100">
    <div className={`${styles.line} me-3`}></div>
    <div className={`star-icon ${styles.iconColor}`}><i className="fas fa-star fa-1x"></i></div>
    <div className={`${styles.line} ms-3`}></div>
    </div> 
    </>
  )
}
