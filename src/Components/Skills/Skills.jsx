import React, { useEffect, useState } from 'react';
import NavTop from '../NavTop/NavTop';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Loading from '../Loading/Loading.jsx';
import styles from '../Skills/Skills.module.css';

export default function Skills() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[]);

  let professional=[
    {skill:'HTML5',precentage:95},{skill:'CSS3',precentage:90},{skill:'SASS',precentage:90},{skill:'BOOTSTRAP5',precentage:95},
    {skill:'JS/ES6',precentage:85},{skill:'jQuery',precentage:90},{skill:'React JS',precentage:85},
  ]
  let personal=[
    {skill:'COMMUNICATION',precentage:95},{skill:'TEAM WORK',precentage:90},
    {skill:'HARD WORK',precentage:90},{skill:'CREATIVITY',precentage:95}
  ]
  let extra=[
    {skill:'GITHUB',precentage:90},{skill:'REST APIS',precentage:90},{skill:'REGULAR EXPRESSION',precentage:90}
  ]
  
  return (
   <>
   {loading?<Loading/>:<>
   <section className={`${styles.skillsbg}`}>
   <NavTop title='Skills'/>
   <div className="container py-5 px-4">
    <div className="row justify-content-center mt-5">
    <div className={`col-lg-4 py-4 ${styles.bgskills} ${styles.skill} mb-4 mb-lg-0`}><div>
    <h2 className={`${styles.h2skills} mb-2 text-center pt-2`}>PROFESSIONAL</h2>
    {professional.map((skill,index)=><>
      <div className={`${styles.skillcontent} mb-2 px-3`} key={index}>
      <div className={`${styles.bar} d-flex justify-content-between`}>
      <strong>{skill.skill}</strong>
      <strong>{`${skill.precentage}%`}</strong>
      </div>
      <ProgressBar variant="dark" animated now={skill.precentage}  />
      </div></>
      )}
    </div>
  </div>
  <div className={`col-lg-4 py-4 ${styles.bgskills2} ${styles.skill2} mb-4 mb-lg-0`}><div>
    <h2 className={`${styles.h2skills} mb-4 pt-2 text-center`}>PERSONAL</h2>
      {personal.map((skill,index)=><>
      <div className={`${styles.skillcontent} mb-3 px-3`} key={index}>
      <div className={`${styles.bar} d-flex justify-content-between`}>
      <strong>{skill.skill}</strong>
      <strong>{`${skill.precentage}%`}</strong>
     </div>
      <ProgressBar variant="dark" animated now={skill.precentage} />
      </div></>
      )}
  </div>
  </div>
    <div className={`col-lg-4 py-4 ${styles.bgskills} ${styles.skill} mb-4 mb-lg-0`}><div>
      <h2 className={`${styles.h2skills} mb-4 text-center pt-2`}>EXTRA</h2>
      {extra.map((skill,index)=><>
        <div className={`${styles.skillcontent} mb-3 px-3`} key={index}>
        <div className={`${styles.bar} d-flex justify-content-between`}>
      <strong>{skill.skill}</strong>
      <strong>{`${skill.precentage}%`}</strong>
     </div>
      <ProgressBar variant="dark" animated now={skill.precentage}  />
      </div></>
     )}
  </div>
  </div> 
</div>
</div>
</section>
</>}
   </>
  )
}
