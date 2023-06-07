import React from 'react';
import styles from '../NavTop/NavTop.module.css';
import { Link } from 'react-router-dom';

export default function NavTop(props) {
const {title} = props;
  return (
    <div className={`fixed-top ${styles.bgNav} text-white text-center`}>
      <div className={`position-fixed ${styles.xIcon}`}>
      <Link to='/'>
        <i className='fa fa-circle-xmark text-white'></i>
      </Link>
      </div>
        <h4 className={`${styles.NavTitle} mb-0`}><i className={`fa fa-circle me-2 ${styles.iconNav}`}></i>{title}</h4>
    </div>
  )
}
