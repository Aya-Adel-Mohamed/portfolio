import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx';

export default function MainLayout() {
  return (
    <>
    <Outlet></Outlet>
    <NavBar/>
    </>
  )
}
