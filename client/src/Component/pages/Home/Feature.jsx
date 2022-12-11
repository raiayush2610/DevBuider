import "./Feature.css"
import main from '../../imgs/property1.png';
import React ,{useState,useEffect} from 'react'
import {useSpring ,animated} from "react-spring"




function Feature() {
  const [flip,setflip]=useState(false);
   const[fadepro,setfadepro]= useState({ fade: 'midle-h2'} )
  const [opac,setopac] = useState({ opacity: 0})

  const props = useSpring({
    opacity: opac.opacity,
    reset:true,
    reverse:flip,
    display:500,
    onRest: () => setflip(!flip)
  
  });

  useEffect(()=>{
   const timeout = setTimeout(() => {
     if( opac.opacity ===  0){
      
      setopac({opacity: 1})
     }
   }, 2000);
  },[opac])

  return (
          <>
      
        <div className="middle-container3">
      
      <animated.div style={props}>
      <h1 id="codespeedy"> Dev Home Varanasi</h1>
      </animated.div>
       

    </div>
      
    
    
  
    
    
    
    
    
    </>
  
  )
}

export default Feature;
