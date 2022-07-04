import React from 'react'
import './Blog.css'
import SinglePost from './singlePost'

export default function Blog(props) {
   const articles = [
      { category:"react", description:"The useState Hook", link:"https://dev.to/davidecannerozzi/the-usestate-hook-471b", icon:"fab fa-2x fa-react"},
      { category:"react", description:"set up a react project with create-react-app", link:"https://dev.to/davidecannerozzi/learn-create-react-app-a1j", icon:"fab fa-2x fa-react"},
      { category:"react", description:"Array Destructuring in Javascript", link:"https://dev.to/davidecannerozzi/array-destructuring-ifo", icon:"fab fa-2x fa-react"},
      { category:"css", description:"how to center a div with flexbox", link:"https://dev.to/davidecannerozzi/how-to-center-a-div-with-flexbox-2g73",icon:"fab fa-2x fa-css3-alt"},
      { category:"html 5", description:"build a widget with <details> and <summary> tag", link:"https://dev.to/davidecannerozzi/html5-build-a-widget-with-and-tag-1a82", icon:"fab fa-2x fa-html5"}
   ]
   console.log()
   return (
     <div className="absolute w-full">
        <div className="text-center blog-container">
         <div className="header-blog w-72 mx-auto mt-4 mb-2">
            <h2 className="text-4xl p-2 relative">{props.header}</h2>
         </div>
         <a href="https://dev.to/davidecannerozzi" className="underline block p-4" target="_blank" rel="noreferrer">{props.link}</a>
         <article className="grid sm:grid-cols-2 grid-cols-1">
            { articles.map( article=> (<SinglePost category={article.category} description={article.description} link={article.link} icon={article.icon}/>))}
         </article>
      </div>
     </div> 
      
   )
}
