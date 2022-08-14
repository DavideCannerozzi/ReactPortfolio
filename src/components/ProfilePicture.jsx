import React from 'react'

export default function ProfilePicture(props){
   return(
      <>
         <img src={props.href} className="rounded-full shadow-xl mt-6 w-40 ml-12" alt={props.alt} />
      </>
   )
}