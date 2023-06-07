import React, { useEffect, useState } from 'react';
import '../Portfolio/Portfolio.css';
import Loading from '../Loading/Loading.jsx';
import ScrollToTop from '../ScrollToTop/ScrollToTop.jsx';
import NavTop from '../NavTop/NavTop';
import movie from '../../assets/imgs/movie.png';
import meals from '../../assets/imgs/meals.png';
import bakery from '../../assets/imgs/bakery.png';
import Bookmarker from '../../assets/imgs/Bookmarker.png';
import crud from '../../assets/imgs/crud.png';
import Daniels from '../../assets/imgs/DANIELS.png';
import Devfolio from '../../assets/imgs/Devfolio.png';
import fokir from '../../assets/imgs/fokir.png';
import simone from '../../assets/imgs/simone.png';
import smartlogin from '../../assets/imgs/smart login system.png';
import wheather from '../../assets/imgs/wheather.png';
import start from '../../assets/imgs/start react theme.png';
import Projects from '../Projects/Projects';
import game from '../../assets/imgs/game.jpeg';
import noxe from '../../assets/imgs/noxe.jpg';
import StarBorder from '../StarBorder/StarBorder';
import notes from '../../assets/imgs/notes.png';
import memory from '../../assets/imgs/memory game.png';
import pacman from '../../assets/imgs/pacman.png'

export default function Portfolio() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[]);
  const projects = [
    {title:'Notes App', image: notes,skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'React JS',liveDemo:'https://aya-adel-mohamed.github.io/Notes-APP/',Github:'https://github.com/Aya-Adel-Mohamed/Notes-APP',parg:'This project Based on React Js, Joi Vallidation (The most powerful schema description language and data validator for javascript), Sweet Alert. in this project we can add, update and delete note '},
    {title:'Game Over', image: game,skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'React JS',liveDemo:'https://aya-adel-mohamed.github.io/Game-Over/',Github:'https://github.com/Aya-Adel-Mohamed/Game-Over',parg:'This project Based on React Js, Joi Vallidation (The most powerful schema description language and data validator for javascript), and RapidAPI free-to-play-games.'},
    {title:'Noxe Movies', image: noxe,skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'React JS',liveDemo:'https://aya-adel-mohamed.github.io/React-Movies/',Github:'https://github.com/Aya-Adel-Mohamed/React-Movies',parg:'This project Based on React Js, Joi Vallidation (The most powerful schema description language and data validator for javascript), and themoviedb api.'},
    {title:'Start React', image: start,skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'React JS',liveDemo:' https://aya-adel-mohamed.github.io/start-react-theme/',Github:'https://github.com/Aya-Adel-Mohamed/start-react-theme',parg:'This project Based on React Js.'},
    {title:'PacMan Game', image: pacman, skill_1:'HTML',skill_2:'CSS3',skill_3:'Canvas',skill_4:'JAVASCRIPT',skill_5:'JQUERY',liveDemo:'https://aya-adel-mohamed.github.io/PacMan-Game/',Github:'https://github.com/Aya-Adel-Mohamed/PacMan-Game',parg:'This Game Based on HTML5, CSS3, Canvas, JavaScript and Jquery.'},
    {title:'Memory Game', image: memory, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'JQUERY',liveDemo:'https://aya-adel-mohamed.github.io/MemoryGame/',Github:'https://github.com/Aya-Adel-Mohamed/MemoryGame',parg:'This Game Based on HTML5, CSS3, Bootstrap5, JavaScript and Jquery.'},
    {title:'Movies-Api Site', image: movie,skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'JQUERY',liveDemo:'https://aya-adel-mohamed.github.io/Movie-Api/',Github:'https://github.com/Aya-Adel-Mohamed/Movie-Api',parg:'This project Based on HTML, CSS3, Bootstrap5, Regular Expression, JavaScript, jQuery, and themoviedb API, the application allows for one to find the latest trending and upcoming movies using search or get movies by word.'},
    {title:'Meals-Api Site', image: meals, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'JQUERY',liveDemo:'https://aya-adel-mohamed.github.io/meals-app-api/',Github:'https://github.com/Aya-Adel-Mohamed/meals-app-api',parg:'This project Based on HTML, CSS3, Bootstrap5, Regular Expression, JavaScript, jQuery, and Themealdb API, the application allows for one to view all meals, search for a meal based on categories, Area, and view all the ingredients used to prepare the meal.'},
    {title:'wheather Site', image: wheather, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://aya-adel-mohamed.github.io/Weather-App/',Github:'https://github.com/Aya-Adel-Mohamed/Weather-App',parg:'A simple HTML, CSS3, Bootstrap5, and JavaScript application to display weather of any location, forecast data such as minimum and maximum temperature, wind speed and so on.'},
    {title:'Login Form', image: smartlogin, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://aya-adel-mohamed.github.io/login-form/',Github:'https://github.com/Aya-Adel-Mohamed/login-form',parg:'Smart Login System created using HTML, CSS3, Bootstrap5, and JavaScript.'},
    {title:'Crud-App Site', image: crud, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://aya-adel-mohamed.github.io/crud-application/',Github:'https://github.com/Aya-Adel-Mohamed/crud-application',parg:'This application is created to add, display, search, update and delete product. it was created using HTML, CSS3, Bootstrap5, JavaScript.'},
    {title:'Bookmarker Site', image: Bookmarker, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://aya-adel-mohamed.github.io/Bookmarker',Github:'https://github.com/Aya-Adel-Mohamed/Bookmarker',parg:'This application is created to add, visit and delete your favorite sites. it was created using HTML, CSS3, Bootstrap5, JavaScript.'},
    {title:'Devfolio Site', image: Devfolio, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',liveDemo:'https://aya-adel-mohamed.github.io/Bootstrap-Project/',Github:'https://github.com/Aya-Adel-Mohamed/Bootstrap-Project',parg:'This project Based on HTML, CSS3, Bootstrap5'},
    {title:'Daniels Site', image: Daniels, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',liveDemo:'https://aya-adel-mohamed.github.io/Daniels/',Github:'https://github.com/Aya-Adel-Mohamed/Daniels',parg:'This project Based on HTML, CSS3, Bootstrap5'},
    {title:'Simone Site', image: simone, skill_1:'HTML5',skill_2:'CSS3',liveDemo:'https://aya-adel-mohamed.github.io/Simone/',Github:'https://github.com/Aya-Adel-Mohamed/Simone',parg:'This project Based on HTML, CSS3'},
    {title:'Fokir Site', image: fokir, skill_1:'HTML5',skill_2:'CSS3',liveDemo:'https://aya-adel-mohamed.github.io/Fokir/',Github:'https://github.com/Aya-Adel-Mohamed/Fokir',parg:'This project Based on HTML, CSS3'},
    {title:'Family Bakery Site', image: bakery, skill_1:'HTML5',skill_2:'CSS3',liveDemo:'https://aya-adel-mohamed.github.io/Bakery/',Github:'https://github.com/Aya-Adel-Mohamed/Bakery',parg:'This project Based on HTML, CSS3'},
];

  return (
    <>
    {loading?<Loading/>:<>
    <section id='portfolio' className='position-relative bgportfolio h-100'>
      <div className='circle-1'></div>
      <div className='circle-2'></div>
      <div className='circle-3'></div>
      <div className='circle-4'></div>
      <NavTop title='Portfolio'/>
     <div className="container py-5">
     <h2 className='text-center mb-2 mt-5 fs-2 text-white parg'>My Work</h2>
    <StarBorder/>
  <div className="row mt-1 pt-1 pb-5 align-items-center g-0 g-md-4">
  {projects.map((Project,index)=>
  <Projects key={index} data={Project} id={index}/>
 )};
</div>
</div>
<ScrollToTop/>
</section>
    </>}
    
</>
  );
}