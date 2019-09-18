import React, {Component} from 'react';
import './App.css'
import background from './background.png'
import background1 from './background1.jpeg'
import background2 from './background2.jpeg'
import { Button } from '@material-ui/core';
import Fade from 'react-reveal/Fade'

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
    //not sure why this sometimes returns undefined
    let number = this.generateNumber()
    if (number === undefined) {
      this.changeBackground()
    } else {
      this.setState({backgroundImg: this.state.array[number]})
    }
  }

  render() {
    return (
      <div style={{
        height: '100vh',
        backgroundColor: 'black',
        width: '100vw',
        maxWidth: '100%',
      }}>
        <Fade spy={this.state.backgroundImg} appear='true'>
          <div className="landingDiv"
          style={{
            backgroundImage: `url(${this.state.backgroundImg})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
            <Fade bottom duration="2000" delay='500'>
              <div style={{
                textAlign: 'center',
              }}>
                <h1 style={{
                  color: 'white',
                  fontSize: '30px',
                  letterSpacing: '8px',
                  fontFamily: 'sans-serif',
                  fontWeight: '200',
                  lineHeight: '1.8em',
                  textTransform: 'uppercase',
                  }}>Chris Chan's Portfolio Site
                </h1>
                <h1 style={{
                  color: 'white',
                  fontSize: '30px',
                  letterSpacing: '8px',
                  fontFamily: 'sans-serif',
                  fontWeight: '200',
                  lineHeight: '1.8em',
                  textTransform: 'uppercase'
                  }}>Welcome
                </h1>
                <h1 style={{
                  color: 'white',
                  fontSize: '16px',
                  letterSpacing: '4px',
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
          <div className='skillsDiv'>
            <Fade bottom duration="2000">
              <div style={{
                textAlign: 'center',
                width: '70vw',
              }}>
                <p style={{
                  fontSize: '30px',
                  letterSpacing: '8px',
                  fontFamily: 'sans-serif',
                  fontWeight: '200',
                  lineHeight: '1.8em',
                  textTransform: 'uppercase'
                }}>Who am I?</p>
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
                <p style={{
                  fontSize: '30px',
                  letterSpacing: '8px',
                  fontFamily: 'sans-serif',
                  fontWeight: '200',
                  lineHeight: '1.8em',
                  textTransform: 'uppercase'
                }}>What Skills Do I Have?</p>
                <p>I focus mainly on front-end development, but I am also knowledgeable about the back-end when 
                  it comes to web development. Technologies I am proficient at include HTML, CSS, JS-ES5/ES6
                  React, React-Router, Material-UI, RESTful APIs, and AJAX. Technologies I am knowledgeable with
                  include back-end tools such as NodeJS, ExpressJS, and Python.
                </p>
                <p>
                  This site itself is powered by HTML, CSS, React, React-Router, and React-Reveal.
                </p>
              </div>
              </Fade>
          </div>
          <div className='stockDiv'>
            <Fade bottom duration="2000">
              <div style={{
                textAlign: 'center',
                width: '70vw',
              }}>
                <p style={{
                  color: 'white',
                  fontSize: '30px',
                  letterSpacing: '8px',
                  fontFamily: 'sans-serif',
                  fontWeight: '200',
                  lineHeight: '1.8em',
                  textTransform: 'uppercase',
                }}>StockViewer</p>
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
          <div className='classroomDiv'>
            <Fade bottom duration="2000">
              <div style={{
                textAlign: 'center',
                width: '70vw',
              }}>
                <p style={{
                  fontSize: '30px',
                  letterSpacing: '8px',
                  fontFamily: 'sans-serif',
                  fontWeight: '200',
                  lineHeight: '1.8em',
                  textTransform: 'uppercase'
                }}>MathPractice</p>
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
          <div className='houseDiv'>
            <Fade bottom duration="2000">
              <div style={{
                textAlign: 'center',
                width: '70vw',
              }}>
                <p style={{
                  fontSize: '30px',
                  letterSpacing: '8px',
                  fontFamily: 'sans-serif',
                  fontWeight: '200',
                  lineHeight: '1.8em',
                  textTransform: 'uppercase'
                }}>Dream Home</p>
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
    )
  }
}

export default App;
