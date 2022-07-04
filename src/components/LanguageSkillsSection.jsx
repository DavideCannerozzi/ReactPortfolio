import React from 'react'
import SpaghettiIcon from '../images/spaghetti.png'
import SangriaIcon from '../images/sangria-icon.png'
import EnglishFlag from '../images/english-flag.png'

export default function LanguageSkillsSection(props){
   const skills = [
      { id:1, name:'Italian:', icon:SpaghettiIcon, alt:'icon-spaghetti', level:'Mother Tongue', class:'w-8 mr-2'},
      { id:2, name:'English:', icon:EnglishFlag, alt:'icon-flag', level:'Fluent', class:'w-8 mr-2 ml-4'},
      { id:3, name:'Spanish:', icon:SangriaIcon, alt:'icon-sangria', level:'Basic',class:'w-8 ml-4 mr-2'}
   ]
   return(
      <div className="border-t-4 border-blue-900">
         <h3 class="text-2xl mb-2 mt-4 text-center">{ props.header }</h3>
         <ul className="md:flex md:justify-center text-center lang-skills p-8">
            { skills.map( skill => <li><img src={ skill.icon } alt={ skill.alt }className={ skill.class } /><span>{ skill.name }</span><span>{ skill.level }</span></li>  )}
         </ul>
      </div>
   )
}