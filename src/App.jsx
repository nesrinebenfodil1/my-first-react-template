import './App.css'
import Navigation from './components/naviagtion/Navigation.jsx'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/about/About.jsx'
import Products from './pages/Products/Products.jsx'
// import Main from './components/main/Main.jsx'
import Cards from './components/Features/Cards.jsx'
import FeaturedSection from './components/sections/Sections.jsx'
import sectionsData from './components/sections/sectionsData.js'
function App() {
 
  return (
    <div className='AppWrapper'>
      <Navigation/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Products" element={<Products  />} />
      </Routes>

      {/* <Home/> */}
      {/* <Cards/> */}
      {/* <FeaturedSection data = {sectionsData}/> */}
    </div>



  )
}

export default App
