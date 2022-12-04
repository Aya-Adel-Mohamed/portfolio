import React from 'react';
import {createHashRouter, RouterProvider} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Contact from './Components/Contact/Contact.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import MainLayout from "./Components/MainLayout/MainLayout.jsx";
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Education from './Components/Education/Education.jsx';
import PortfolioList from './Components/PortfolioList/PortfolioList.jsx';

let routers = createHashRouter([
  {path:'/' , element: <MainLayout/> , children:[
    {index:true , element: <Home/>},
    {path:'portfolio' , element: <Portfolio/>},
    {path:'about',element:<AboutMe/>},
    {path:'skills',element:<Skills/>},
    {path:'education',element:<Education/>},
    {path:'contact' , element: <Contact/>},
    {path:'list',element:<PortfolioList/>},
    {path:'*' , element: <NotFound/>},
  ]}
])

export default function App() {
  return (
    <>
    <RouterProvider router={routers}/>
    </>
  );
}