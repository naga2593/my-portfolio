import React from 'react'
import profileImg from "../Assets/Images/profileImage.png";

const Home = () => {
  return (
    <>
    <div className='row'>
      <div className='col-sm-6'>
      <h1 className='header-text'>Hi, I'm <span>Naga Raju Kagitala</span> <br></br>Front End Developer</h1>
      </div>
      <div className="col-sm-6">
      <img src={profileImg} alt="profile picture" />
      </div>
    </div>
  
    {/* <h1 className='header-text'>I'm a Fornt End <span>Developer</span></h1> */}
   
   
      
    </>
  )
}

export default Home