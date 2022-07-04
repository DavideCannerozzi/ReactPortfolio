import React from 'react'

export default function MainSkills(){
   const skillsIcons = [
      { id:1, name:'React.js', class:'fab fa-2x fa-react mr-10' },
      { id:2, name:'ue.js', class:'fab fa-2x fa-vuejs mr-10' } ,
      { id:3, name:'Javascript', class:'fab fa-2x fa-js-square mr-10' },
      { id:4, name:'Html', class:'fab fa-2x fa-html5 mr-10' },
      { id:5, name:'Css', class:'fab fa-2x fa-css3-alt mr-10' }
   ]
   return(
         <div className="p-8 text-center main-skills">
            <ul className="md:flex justify-center">
               { skillsIcons.map( skillIcon => (<li id={ skillIcon.id } className={ skillIcon.class }> 
               { skillIcon.name }</li>))}
            </ul>
         </div>
   )
}