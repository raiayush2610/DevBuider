import React from 'react'
import "./contact.css"
import propifle from '../../imgs/profile.png';
function Contact() {
  return (
    <div className="middle-container" >
      <div className='image-div'>
        <img  className="profile-img" src={propifle} alt="" srcset=""/>
      </div>
    <div className="profile-row">
        <h1>Anil Singh</h1>
        <p>Head And Ceo of dev Builder</p>
        <h3><a href="tel:+91942528235">CONTACT Number</a></h3>
        <p>BHEL GATE Tarana Shivpur</p>
        <div className="contract-details">
        <p><a className="btn" href="mailto:ayushayushravi@email.com">CONTACT ME THROUGHT MAIL</a></p>
        <p><a className="btn" href="tel:+5454548">Secondary Number</a>  </p>
       
        </div>
      </div>
      
      
  
    </div>
  )
}

export default Contact
