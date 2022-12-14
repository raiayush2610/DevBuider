import React ,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom";

import main from '../../imgs/6.jpg';
import Feature from './Feature';
import './home.css'

function Home() {
  const[fadepro,setfadepro]= useState({
    fade: 'midle-h2'}
  )

  useEffect(()=>{
   const timeout = setTimeout(() => {
     if(fadepro.fade === 'midle-h2'){
      setfadepro({fade:'middle-h2'})
     }
   }, 2000);
  },[fadepro])
 
  return (
          <>
      
        <div className="middle-container">
      <img src = {main} alt="food" className="middle-img"/>
      <div className={fadepro.fade}>
          <h1 id="codespeedy"> DEV HOMES </h1>
          <h1 id="codespeedy" className='title-city'> VARANASI</h1>
      </div>

    </div>
       <Feature/>
      
        
    </>
        );
    };


export default Home
