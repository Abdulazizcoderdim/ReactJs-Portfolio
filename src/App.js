import React from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact' 

const App = () => {
   return(
   <>
      <Sidebar/>
      <main className='main'>
         <Home/>
         <About/>
         <Portfolio/>
         <Services/>
         {/* <Resume/> */}
         {/* <Pricing/> */}
         {/* <Blog/> */}
         <Contact/> 
          
      </main>
    </>
   )
}

export default App;
