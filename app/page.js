import React from 'react'
import { NavbarAchievements } from './components/Navbar.Achievements'
import { NavbarBrands } from './components/Navbar.Brands'
import { NavbarHeadTitle } from './components/Navbar.HeadTitle'
import Steps from './components/Steps'
import { Content } from './components/Content'

const Home = () => {
  return (
    <>
      <NavbarAchievements />
      <NavbarBrands />
      <NavbarHeadTitle />
      <Steps />
      <Content /> 
    </>
  )
}

export default Home