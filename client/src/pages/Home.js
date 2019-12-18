import React, {Component} from 'react';
import '../App.css'
import background from '../assets/background.png'
import background1 from '../assets/background1.jpeg'
import background2 from '../assets/background2.jpeg'
import coding from '../assets/coding.jpeg'
import stocks from '../assets/stocks.jpg'
import classroom from '../assets/classroom.jpg'
import house from '../assets/house.jpg'
import contact from '../assets/contact.jpg'
import { Button } from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import {Link} from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      backgroundImg: background,
      array: [background, background1, background2]
    }
  }
  
  generateNumber = () => {
    let newBackgroundNo = Math.floor(Math.random() * Math.floor(this.state.array.length))
    if (this.state.backgroundImg === this.state.array[newBackgroundNo]) {
      this.generateNumber()
    } else {
      return newBackgroundNo
    }
  }

  changeBackground = () => {
    let number = this.generateNumber()
    if (number === undefined) {
      this.changeBackground()
    } else {
      this.setState({backgroundImg: this.state.array[number]})
    }
  }

  render() {
    
    const blackHomeTitleStyles = {
      fontSize: '2em',
      letterSpacing: '8px',
      fontFamily: 'sans-serif',
      fontWeight: '200',
      lineHeight: '1.8em',
      textTransform: 'uppercase',
    }

    const whiteHomeTitleStyles = {...blackHomeTitleStyles}
    whiteHomeTitleStyles.color = 'white'

    const backgroundImageStyles = {
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
      height: 'auto',
      width: '100vw',
      maxWidth: '100%',
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
    }
    
    const homeBackgroundStyles = {...backgroundImageStyles}
    homeBackgroundStyles.backgroundImage = `url(${this.state.backgroundImg})`

    const skillsBackgroundStyles = {...backgroundImageStyles}
    skillsBackgroundStyles.backgroundImage = `url(${coding})`

    const stockBackgroundStyles = {...backgroundImageStyles}
    stockBackgroundStyles.backgroundImage = `url(${stocks})`

    const classroomBackgroundStyles = {...backgroundImageStyles}
    classroomBackgroundStyles.backgroundImage = `url(${classroom})`

    const houseBackgroundStyles = {...backgroundImageStyles}
    houseBackgroundStyles.backgroundImage = `url(${house})`
    
    const contactBackgroundStyles = {...backgroundImageStyles}
    contactBackgroundStyles.backgroundImage = `url(${contact})`

    const opacityScreenCenteringText = {
      minHeight: '100vh',
      height: 'auto',
      width: '100vw',
      maxWidth: '100%',
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(225, 225, 225, 0.8)',
    }

    const centeringDiv = {
      textAlign: 'center',
      width: '70vw',
    }

    return (
      <div style={{
        height: '100vh',
        backgroundColor: 'black',
      }}>
        <Fade spy={this.state.backgroundImg} appear='true'>
          <div
          style={homeBackgroundStyles}>
            <Fade bottom duration="2000" delay='500'>
              <div style={centeringDiv}>
                <h1 style={whiteHomeTitleStyles}>Chris Chan's Portfolio Site
                </h1>
                <h1 style={whiteHomeTitleStyles}>Welcome
                </h1>
                <h1 style={{
                  color: 'white',
                  fontSize: '1.2em',
                  letterSpacing: '8px',
                  fontFamily: 'sans-serif',
                  fontWeight: '200',
                  lineHeight: '1.8em',
                  textTransform: 'uppercase'
                  }}>
                  Don't like this background? 
                  <Button
                  variant="contained"
                  className="changeIt"
                  onClick={this.changeBackground}
                  style={{
                    border: '1px solid black',
                    fontWeight: '200',
                    lineHeight: '1.8em',
                    letterSpacing: '4px',
                  }}
                  >
                    Change it!
                  </Button>
                </h1>
              </div>
              </Fade>
            </div>
          </Fade >
          <div style={skillsBackgroundStyles}>
          <div style={opacityScreenCenteringText}>
            <Fade bottom duration="2000">
              <div style={centeringDiv}>
                <p style={blackHomeTitleStyles}>Who am I?</p>
                <p>
                  I am a web developer based in Toronto. I graduated from the University of Waterloo with
                  a Bachelor of Sciences in the Honours Science program, specializing in mostly biology courses 
                  with a sub specialization in economics. I've also had a great passion for design and website 
                  development since high school, and eventually decided to turn it into a career!
                </p>
                <p>
                  Beyond the professional side of things, I also enjoy pursuing my hobbies! Personal fitness,
                  personal finance, video games, and poker are all things I enjoy studying and doing in my spare time!
                </p>
                <p style={blackHomeTitleStyles}>What Skills Do I Have?</p>
                <p>I focus mainly on front-end development, but I am also knowledgeable about the back-end when 
                  it comes to web development. Technologies I am proficient at include HTML, CSS, JS-ES5/ES6
                  React, React-Router, Material-UI, RESTful APIs, and AJAX. Technologies I am knowledgeable with
                  include back-end tools such as NodeJS, ExpressJS, and Python.
                </p>
                <p>
                  This site itself is powered by HTML, CSS, React, React-Router, React-Responsive and React-Reveal.
                </p>
              </div>
              </Fade>
          </div>
          </div>
          <div style={stockBackgroundStyles}>
            <Fade bottom duration="2000">
              <div style={centeringDiv}>
                <p style={whiteHomeTitleStyles}>Stock Viewer</p>
                <p style={{
                  color: 'white',
                }}>
                  StockViewer is exactly what it sounds like, it's a web application to assist you in your
                  mission to scout for the best stock's for your portfolio! Search for stock tickers or names 
                  of different companies you might be interested to look up their financial statsistics! Once you're 
                  done looking at a stock, decide how much of that stock you want to add to your portfolio and any
                  notes you want to jot down about it, and throw it in! Watch as your portfolio value rises, and use
                  the filter bar to look for stock's you don't want anymore to remove them as well!
                </p>
                <p style={{
                  color: 'white',
                }}>
                  This application was built HTML, CSS, JS, React, and AJAX.
                </p>
                <Button
                  href='https://mrchrischan.github.io/StockViewer/'
                  variant='contained'
                  style={{
                    margin: '10px',
                  }}>
                  I want to see it!
                </Button>
                <Button
                  href='https://github.com/mrchrischan/StockViewer'
                  variant='contained'
                  style={{
                    margin: '10px',
                  }}>
                  Show me the code!
                </Button>
              </div>
              </Fade>
          </div>
          <div style={classroomBackgroundStyles}>
          <div style={opacityScreenCenteringText}>
            <Fade bottom duration="2000">
              <div style={centeringDiv}>
                <p style={blackHomeTitleStyles}>Math Practice</p>
                <p>Back in university and after university I used to tutor students for a bit of extra money to keep me along 
                  (a side hustle if you will). Finding homework sheets and printing them for students was eventually
                  proving itself to be a very costly task, both timewise and moneywise. I developed MathPractice
                  to help streamline the process of homework distribution, as well as question production during
                  tutoring sessions and classes for primary school students looking for math help! This app currently
                  features 16 different modes involving basic math operations with numbers of varying digits. More 
                  will be added soon!
                </p>
                <p>
                  This application was created with HTML, CSS, JS, and React.
                </p>
                <Button
                  href="https://mrchrischan.github.io/mathpracticereact/"
                  color="primary"
                  variant='contained'
                  style={{
                    margin: '10px',
                  }}>
                  I want to see it!
                </Button>
                <Button
                  href="https://github.com/mrchrischan/mathpracticereact"
                  color="primary"
                  variant='contained'
                  style={{
                    margin: '10px',
                  }}>
                  Show me the code!
                </Button>
              </div>
              </Fade>
          </div>    
          </div>
          <div style={houseBackgroundStyles}>
          <div style={opacityScreenCenteringText}>
            <Fade bottom duration="2000">
              <div style={centeringDiv}>
                <p style={blackHomeTitleStyles}>Dream Home</p>
                <p>
                  Dream Home is a Pinterest inspired site, made for mainly browsing home decor! This app was 
                  developed with a team, using GitHub workflow and agile developement principles. The app features
                  the ability to create your own account, so you can sign in, and create a profile filled with multiple
                  boards and posts of your own favorite home decor! You can also share your posts with other users, 
                  as well as share posts of other users that you find have the same great taste as you! Star your favorite's
                  too!
                </p>
                <p>
                  I worked with mainly React, React-Router, Material-UI, HTML, CSS, JS, AJAX, NodeJS, and ExpressJS.
                </p>
                <Button 
                  color="primary"
                  variant='contained'
                  disabled
                  style={{
                    margin: '10px',
                  }}>
                  Site is coming soon!
                </Button>
                <Button
                href="https://github.com/mrchrischan/Dream-Home"
                  color="primary"
                  variant='contained'
                  style={{
                    margin: '10px',
                  }}>
                  Show me the code!
                </Button>
              </div>
              </Fade>
          </div>
          </div>
          <div style={contactBackgroundStyles}>
            <Fade top>
            <div style={{
              display: 'grid',
              justifyContent: 'center',
              alignItems: 'center',
              height: '200px',
              width: '100vw',
              backgroundColor: 'lightgrey',
              textAlign: 'center',
              position: 'relative',
              zIndex: '2',
            }}>
              <div>
                <p style={{
                  fontFamily: 'sans-serif',
                  fontSize: '1.5em',
                  letterSpacing: '3px',
                  overflow: 'hidden', 
                }}>
                  Let me be the front end developer you need. Contact me at:
                </p>
                <p style={{
                  fontFamily: 'sans-serif',
                  fontSize: '1.1em',
                  letterSpacing: '2px', 
                }}>
                  Tel: 519 497 9255
                </p>
                <p style={{
                  fontFamily: 'sans-serif',
                  fontSize: '1.1em',
                  letterSpacing: '2px', 
                }}>
                  Email: chanchris1117@gmail.com
                </p>
                <p style={{
                  fontFamily: 'sans-serif',
                  fontSize: '1.1em',
                  letterSpacing: '2px', 
                }}>
                  <Link 
                  className='contactLink'
                  to="/contact/">Or send me a message here! 
                  </Link>
                </p>
              </div>
            </div>
            </Fade>
            {/* <Fade right delay='1000'>
            <div style={{
              height: '200px',
              width: '200px',
              backgroundColor: 'lightblue',
              borderRadius: '150px',
              position: 'absolute',
              zIndex: '1',
              top: '50%',
              left: '5%',
            }}>
            </div>
            </Fade>
            <Fade left delay='1000'>
            <div style={{
              height: '200px',
              width: '200px',
              backgroundColor: 'lightblue',
              borderRadius: '150px',
              position: 'absolute',
              zIndex: '1',
              bottom: '50%',
              right: '5%',
            }}>
            </div>
            </Fade> */}
          </div>
      </div>
    )
  }
}

export default App;
