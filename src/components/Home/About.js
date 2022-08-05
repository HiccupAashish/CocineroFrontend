import React from 'react'
import "../../styles/About.scss"
import {SiFacebook,SiInstagram,SiLinkedin} from "react-icons/si"
import {AiFillGithub} from "react-icons/ai"
export default function About() {
  return (
    <div>
      <h2>Contact Us</h2>
      <h1>Follow us on</h1>
      <div className="social_links">
            <div className='social_media'>
               <SiFacebook/>
          </div>
          <div className='social_media'>
                <SiInstagram/>
          </div>
          <div className='social_media'>
                <AiFillGithub/>
          </div>
          <div className='social_media'>
                <SiLinkedin/>
          </div>
      </div>

    </div>
  )
}
