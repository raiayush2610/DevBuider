import React ,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom";

import main from '../../imgs/property1.png';

import './home.css'

function Home() {
  const[fadepro,setfadepro]= useState({
    fade: 'midle-h2'}
  )
  const [opacity, setOpacity] = useState(false);
  var a = document.getElementById('codespeedy')
  console.log(a);
  useEffect(()=>{
   const timeout = setTimeout(() => {
     if(fadepro.fade === 'midle-h2'){
      setfadepro({fade:'middle-h2'})
     }
   }, 2000);
  },[fadepro])
  console.log(fadepro.fade);
  return (
          <>
      
        <div className="middle-container">
      <img src = {main} alt="food" className="middle-img"/>
      <div className={fadepro.fade}>
          <h1 id="codespeedy"> Dev Builder</h1>
      </div>

    </div>
      
        
    </>
        );
    };


export default Home
