import React from 'react'
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import NoPage from './pages/NoPage/nopage';
import Footer from './Footer/footer'
import Navbar from './Navbar/Navbar';
import Contact from './pages/Contact/Contact';
import Feature from './pages/Home/Feature';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
     <Router>
     <Navbar/>
                <Routes>
                  
                    <Route path = "/" element = {<Home />}/>
                    <Route path = "/contact" element = {<Contact />}/>
                    <Route path = "/Feature" element = {<Feature/>}/>
                    <Route path = "/admin" element = {<Admin />}/>
                    <Route path= '*' element ={<NoPage/>}/>
                    
                    
                    </Routes>
                    <Footer/> 
          </Router>   
    </>
  )
}

export default App;
