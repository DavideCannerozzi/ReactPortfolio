import React from 'react'
import './About.css'
import ContactMe from './ContactMe'
import ProfilePicture from './ProfilePicture'
import ProfileImg from '../images/profile-picture.jpg'

export default function About(props) {
   return (
      <div className="absolute w-full">
         <h2 className="text-center text-4xl p-2">{ props.header }</h2>
         <div className="about-container sm:p-0 md:p-8">
            <div className="grid md:grid-cols-3 grid-cols">
               <div className="md:col-span-2 sm:p-8 p-0">
                  <p>{ props.aboutMeFirst }</p>
                  <p className="mt-4">{ props.aboutMeSecond }</p>
                  <p className="mt-4">{ props.aboutMeThird }</p>
                  <h3 className="text-bold text-3xl underline capitalize mt-6 italic sm:text-left text-center">{ props.subHeader }</h3>
                  <ContactMe />
              </div>
             <ProfilePicture href={ ProfileImg } alt="profile-picture" /> 
            </div> 
         </div>
      </div>
   )
}
