import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'



const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'
         onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's leaders today</h2>
        <p>Embark on a transformative educational journey with our 
            university's comprehensive education programs. Our cutting-edge curriculum
            is designed to empower students with the knowledge,skills and experiences needed to excel
            in the dynamic field of education.
        </p>
        <p> With a focus of innovation,hands on learning and personalized  mentorship
            our programs prepare aspiring educators to make a meaningful impact in classrooms,schools and communities.
        </p>
        
      </div>
    </div>
  )
}

export default About
