import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import { UpdateFollower } from 'react-mouse-follower';
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Bannertext from './components/Banner/Bannertext'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className='overflow-x-hidden'>
      <UpdateFollower 
      mouseOptions={{
        backgroundColor: "white",
        zIndex: 999,
        followSpeed: 1.5,
        
      }}
      >
        <Navbar/>
         <Hero/>
         </UpdateFollower>
         <UpdateFollower
          mouseOptions={{
            backgroundColor: "black",
            zIndex: 999,
            followSpeed: 1.5,
            
          }}
         >
  
         
         <Services/>
         <Banner/>
         <Bannertext/>
         <Blogs/>
         <Footer/>
      </UpdateFollower>
      </main>
    </>
  )
}

export default App
