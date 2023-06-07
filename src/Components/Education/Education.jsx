import React, { useEffect, useState } from 'react';
import NavTop from '../NavTop/NavTop.jsx';
import '../Education/Education.css';
import Loading from '../Loading/Loading.jsx';

export default function Education() {
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
  <section id="education"className='bgeducation d-flex align-items-center'>
  <NavTop title='Education'/>
 <div className="container px-4">
  <div className="row gx-0 gx-lg-5">
  <div className="col-lg-6 mb-5">
    <h2 className='h2-content mt-5 mt-md-0 mb-3 ps-4 text-white animate'>Education Qualifications</h2>
  <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item bg-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <i className='fa fa-graduation-cap me-2 fs-6 fa-fade'></i>2017 - 2022
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body text-white">
        <p className='mb-0'>Bachelor's degree in Electrical Engineering, Communications and  Electronics Department, Alexandria University.</p>
        <p className='mb-0'><strong>Grade :</strong> Very good with honors (B+ 82.59%).</p>
        <p className='mb-0'><strong>Graduation Project : </strong>Automated Configuration Network (AutoNet). </p>
        <p className='mb-0 '><strong>Graduation Project Grade : </strong>Excellent.</p>

      </div>
    </div>
  </div>
  <div className="accordion-item bg-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <i className='fa fa-code me-2 fs-6 fa-fade'></i>Aug 2022 - Nov 2022
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body text-white">
        <p>4-Month Diploma Front-end Developer in Route Academy Egyptian IT- Training Center.</p>
      </div>
    </div>
  </div>
 
</div>
  </div>
  <div className="col-lg-6 mb-5 mb-lg-0">
  <h2 className='h2-content mb-3 ps-4 text-white animate2'>Training</h2>
  <div className="contentTraining bg-items mb-3 p-4 rounded-3 position-relative">
  <i className='fa-regular fa-snowflake text-white fa-2x position-absolute'></i>
    <p className='text-white accordion-body'>I attended 2 weeks Training at <strong>MANTRAC</strong> during my summer internship program from: 5th of September 2021 to 19th of September 2021.</p>
    <p className='text-white accordion-body'>I attended 2 weeks Training at <strong>ALEXANDRIA ELECTRICITY DISTRIBUTION COMPANY</strong> during my summer internship program from: 12th of September 2020 to 1st of October 2020.</p>
    <p className='text-white accordion-body'>I attended 2 weeks Training at <strong>ALEXANDRIA ELECTRICITY DISTRIBUTION COMPANY</strong> during my summer internship program from: 14th of August 2021 to 2nd of September 2021.</p>
  </div>
  </div>
  </div>
 </div>
  </section>
  </>}
 
  </>
  )
}
