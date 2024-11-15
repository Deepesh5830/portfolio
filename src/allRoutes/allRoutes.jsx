import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import MySkill from '../pages/MySkill';
import MyProject from '../pages/MyProject';
import MyContact from '../pages/MyContact';



const AllRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/my_skill' element={<MySkill />} />
        <Route path='/my_project' element={<MyProject />} />
        <Route path='/my_contact' element={<MyContact />} />
      </Routes>
    </MainLayout>

  )
}

export default AllRoutes;