import React from 'react'
import './ContactMe.css'

export default function ContactMe(){

   const socialIcons = [
      { id:1, href:"https://github.com/DavideCannerozzi", class:'fab fa-2x fa-github github ml-8' },
      { id:2, href:"https://www.xing.com/profile/Davide_Cannerozzi2/cv", class:'fab fa-2x fa-xing ml-8'},
      { id:3, href:"https://www.linkedin.com/in/davide-cannerozzi-developer/", class:"fab fa-2x fa-linkedin-in ml-8"}
   ]
      return(
      <div className="md:text-left text-center md:flex mt-8">
         <a href="mailto:d.cannerozzi@gmail.com"><button className="rounded-md transition duration-500     contact-btn p-4 mt-6">Contact Me</button></a>
            <ul className="mt-10 ml-12 flex md:justify-start">
               { socialIcons.map( SocialIcon =>(<li className={SocialIcon.id}><a href={SocialIcon.href} target="_blank" rel="noreferrer"><i className={SocialIcon.class}></i></a></li>)) }
            </ul>
      </div>
   )
}