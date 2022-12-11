import React ,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom";
import main from '../../imgs/property1.png';
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
          <h1 id="codespeedy"> Dev Home Varanasi</h1>
      </div>

    </div>
       
      
        
    </>
        );
    };


export default Home
