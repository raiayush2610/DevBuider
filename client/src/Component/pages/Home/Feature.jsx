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
        <animated.div style={props} className='center'>
      <h1 > Dev Home Varanasi</h1>
      </animated.div>
      </div>
      
      <div className="feature">
          <div className="feature-title center">
            <h5 className="">Feature</h5>
          </div>
          <div className="feature-body">

            <div className="card1">
              <div className="card-body">
                <img src="" alt="" srcset="" />
                <h5 class="card-title">4BHK Luxious VILLA</h5>
                <p> Shivpur Varanasi</p>
                <h4>₹4500 Crore</h4>
                <div className="list-item">
                 <div className="item1"><p>4Bhk </p> 
                     <p> Individual</p><p> House</p></div>
                    <div className="item2"><p>18050Ft</p></div>
                    <div className="item3"><p>5</p></div>
                </div>
              </div>
              <button className="card-button" type="button">Click Me!</button>
              
              </div>
            <div className="card2">
            <div className="card-body">
                <img src="" alt="" srcset="" />
                <h5 class="card-title">4BHK Luxious VILLA</h5>
                <p> Shivpur Varanasi</p>
                <h4>₹4500 Crore</h4>
                <div className="list-item">
                 <div className="item1"><p>4Bhk </p> 
                     <p> Individual</p><p> House</p></div>
                    <div className="item2"><p>18050Ft</p></div>
                    <div className="item3"><p>5</p></div>
                </div>
              </div>
              <button className="card-button" type="button">Click Me!</button>
            </div>
            <div className="card3">
              <div className="card-body">
                <img src="" alt="" srcset="" />
                <h5 class="card-title">Parth Residedency</h5>
                <p>RingRoad Varanasi</p>
                <h4>₹45 Crore</h4>
                <div className="list-item">
                 <div className="item1"><p>4Bhk </p> 
                     <p> Individual</p><p> House</p></div>
                    <div className="item2"><p>18050Ft</p></div>
                    <div className="item3"><p>5</p></div>
                </div>
              </div>
              <button className="card-button" type="button">Click Me!</button>
              </div>
          </div>

      </div>

   

      
    
    
  
    
    
    
    
    
    </>
  
  )
}

export default Feature;
