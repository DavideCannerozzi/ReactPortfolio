import { Route, useLocation, Switch, BrowserRouter as Router } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import ReactGA from 'react-ga';
import { useEffect } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import bulldogImage from './images/bulldog.png'

export default function App() {
  useEffect(() => {
    ReactGA.initialize('UA-171437454-1');
    ReactGA.pageview(window.location.pathname);
  }, []);

  const location = useLocation()
  const transition = useTransition(location,location.pathname, {
    from:{ opacity:0, transform:"translate(100%,0)" },
    enter:{ opacity:1, transform:"translate(0%, 0)" },
    leave:{ opacity:0, transform:"translate(-50%,0)" }
  })


  return (
    
    <div className="App">
       <NavBar /> 
      
       { transition.map(({ item,props,key }) => (
          <animated.div key={ key } style={ props }>
            <Router>
            <Switch location={ item }>
            <Route exact path="/" render={ () => <Home 
              presentation="Ciao, my name is "
              name="davide cannerozzi" 
              jobOne="Front-end Developer"
              jobTwo="React Developer"
              jobThree="Freelancer" 
              image={bulldogImage}
              info="Built with React.js + TailwindCSS"
              />
            } 
            />
            <Route path='/About' render={ () => <About 
              header="About Davide" 
              aboutMeFirst = "Ciao, I am Davide Cannerozzi, a front-end developer from Italy. I am passionate about everything related to the web and programming."
              aboutMeSecond = "I am currently working as a freelance, but I am always open to new opportunities, so don't hesitate to contact me.I am available to relocate."
              subHeader="looking for a developer?"/>
            }
            />
            <Route path='/Skills' render={ () => <Skills 
              header="Skills" />
            }
            />
            <Route path='/Projects' component={ () => <Projects 
              header="Projects"
              subHeader="Some Things I've Built"
              btnGithub="see more on my github"
            />} />
            <Route path='/Blog' component={ () => <Blog 
              header="From My Blog"
              link="Read All The Articles" />
            } 
            />
          </Switch>
          </Router>
          </animated.div> 
          
       ))}

    </div>
    
  );
}

