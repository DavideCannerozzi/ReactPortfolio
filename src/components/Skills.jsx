import React from 'react'
import MainSkills from './MainSkill'
import SecondarySkillsSection from './SecondarySkillsSection'
import LanguageSkillsSection from './LanguageSkillsSection'
import './Skills.css'


export default function Skills(props) {

   return(
      <div className="absolute w-full">
         <div className="container-skills p-5">
            <h2 className="text-center text-4xl p-2">{props.header}</h2>
            <MainSkills />
            <SecondarySkillsSection />
            <LanguageSkillsSection header="Languages" />
         </div>
      </div>
   )
     
}
