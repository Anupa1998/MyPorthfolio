import { useState } from 'react'
import FirstSection from './component/homecomponent/FirstSection'
import NavBar from './NavBar'
import AboutMe from './component/homecomponent/AboutMe'
import LatestProject from './component/homecomponent/LatestProject'
import ProjectCard from './component/ProjectCard/ProjectCard'
import ContactMe from './component/homecomponent/ContactMe'
import Footer from './Footer'
function App() {
 
  return (
    <div className=''>
      <NavBar/>
        <FirstSection/>
        <AboutMe/>
        <LatestProject/>
        <ContactMe/>
        <Footer/>
    </div>
  )
}

export default App
