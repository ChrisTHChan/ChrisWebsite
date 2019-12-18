import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import projects from '../assets/projects.jpg'
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import MediaQuery from 'react-responsive';

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: '',
        }
    }

    render() {
        const width = '60vw', height='60vh';
        const Container = styled.div`
        border-radius: 15px;
        padding: 10px;
        text-align: center;
        box-shadow: 0px 0px 30px black;
        background-color: white;
        overflow: hidden;
        width: ${width};
        `;
        const Children  = styled.div`
        width: ${width};
        position: relative;
        height: ${height};
        `;
        const Arrow = styled.div`
        text-shadow: 1px 1px 1px #fff;
        z-index: 100;
        line-height: ${height};
        text-align: center;
        position: absolute;
        top: 0;
        width: 10%;
        font-size: 3em;
        cursor: pointer;
        user-select: none;
        ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
        `;
        const Dot = styled.span`
        font-size: 1.5em;
        cursor: pointer;
        text-shadow: 1px 1px 1px #fff;
        user-select: none;
        `;
        const Dots = styled.span`
        text-align: center;
        width: ${width};
        z-index: 100;
        `;
        const CarouselUI = ({ position, total, handleClick, children }) => (
        <Container>
            <Children>
                {children}
            </Children>
            <Dots>
                {Array(...Array(total)).map( (val, index) =>
                    <Dot key={index} onClick={handleClick} data-position={index}>
                    {index === position ? '● ' : '○ ' }
                    </Dot>
                )}
            </Dots>
        </Container>
        );
        const Carousel = makeCarousel(CarouselUI);
        
        return(
            <div style={{
                height: '100vh',
                backgroundColor: 'black',
              }}>
                
                <Fade>
                    <div style ={{
                            backgroundImage: `url(${projects})`,
                            height: '100vh',
                            width: '100vw',
                            maxWidth: '100%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            position: 'fixed',
                    }}>
                    </div>
                    <div style ={{
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        height: '100vh',
                        width: '100vw',
                        maxWidth: '100%',
                        display: 'grid',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <MediaQuery minWidth={1105}>
                        <Fade top delay="500">
                            <Carousel>
                                <Slide right>
                                    <div>
                                        <h1 style={{
                                            fontSize: '30px',
                                            letterSpacing: '8px',
                                            fontFamily: 'sans-serif',
                                            fontWeight: '200',
                                            lineHeight: '1.8em',
                                            textTransform: 'uppercase',
                                            }}>Stock Viewer</h1>
                                        <p style={{width: '45vw', margin: '0 auto',}}>
                                        StockViewer is exactly what it sounds like, it's a web application to assist you in your
                                        mission to scout for the best stock's for your portfolio! Search for stock tickers or names 
                                        of different companies you might be interested to look up their financial statsistics! Once you're 
                                        done looking at a stock, decide how much of that stock you want to add to your portfolio and any
                                        notes you want to jot down about it, and throw it in! Watch as your portfolio value rises, and use
                                        the filter bar to look for stock's you don't want anymore to remove them as well!
                                        This application was built HTML, CSS, JS, React, and AJAX.<br/>
                                        <Button 
                                        href='https://mrchrischan.github.io/StockViewer/'
                                        color="primary"
                                        variant='contained'
                                        style={{
                                            margin: '10px',
                                        }}>
                                        I want to see it!
                                        </Button>
                                        <Button
                                        href='https://github.com/mrchrischan/StockViewer'
                                        color="primary"
                                        variant='contained'
                                        style={{
                                            margin: '10px',
                                        }}>
                                        Show me the code!
                                        </Button>
                                        </p>
                                    </div>
                                </Slide>
                                <Slide right>
                                    <div >
                                        <h1 style={{
                                            fontSize: '30px',
                                            letterSpacing: '8px',
                                            fontFamily: 'sans-serif',
                                            fontWeight: '200',
                                            lineHeight: '1.8em',
                                            textTransform: 'uppercase',
                                            }}>Math Practice</h1>
                                        <p style={{width: '45vw', margin: '0 auto',}}>
                                        Back in university and after university I used to tutor students for a bit of extra money to keep me along 
                                        (a side hustle if you will). Finding homework sheets and printing them for students was eventually
                                        proving itself to be a very costly task, both timewise and moneywise. I developed MathPractice
                                        to help streamline the process of homework distribution, as well as question production during
                                        tutoring sessions and classes for primary school students looking for math help! This application was created with HTML, CSS, JS, and React.<br/>
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
                                        </p>
                                    </div>
                                </Slide>
                                <Slide right>
                                    <div>
                                        <h1 style={{
                                            fontSize: '30px',
                                            letterSpacing: '8px',
                                            fontFamily: 'sans-serif',
                                            fontWeight: '200',
                                            lineHeight: '1.8em',
                                            textTransform: 'uppercase',
                                            }}>Dream Home</h1>
                                        <p style={{width: '45vw', margin: '0 auto',}}>
                                        Dream Home is a Pinterest inspired site, made for mainly browsing home decor! This app was 
                                        developed with a team, using GitHub workflow and agile developement principles. The app features
                                        the ability to create your own account, so you can sign in, and create a profile filled with multiple
                                        boards and posts of your own favorite home decor! You can also share your posts with other users, 
                                        as well as share posts of other users that you find have the same great taste as you! Star your favorite's
                                        too! I worked with mainly React, React-Router, Material-UI, HTML, CSS, JS, AJAX, NodeJS, and ExpressJS.<br/>
                                        <Button 
                                        color="primary"
                                        disabled
                                        variant='contained'
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
                                        </p>
                                    </div>
                                </Slide>
                            </Carousel>
                        </Fade>
                        </MediaQuery>
                        <MediaQuery maxWidth={1105}>
                        <Fade top delay="500">
                            <Carousel>
                                <Slide right>
                                    <div>
                                        <h1 style={{
                                            fontSize: '30px',
                                            letterSpacing: '8px',
                                            fontFamily: 'sans-serif',
                                            fontWeight: '200',
                                            lineHeight: '1.8em',
                                            textTransform: 'uppercase',
                                            }}>Stock Viewer</h1>
                                        <div style={{
                                            display: 'grid',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Button 
                                            href='https://mrchrischan.github.io/StockViewer/'
                                            color="primary"
                                            variant='contained'
                                            style={{
                                                margin: '10px',
                                            }}>
                                            I want to see it!
                                            </Button>
                                            <Button
                                            href='https://github.com/mrchrischan/StockViewer'
                                            color="primary"
                                            variant='contained'
                                            style={{
                                                margin: '10px',
                                            }}>
                                            Show me the code!
                                            </Button>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide right>
                                    <div >
                                        <h1 style={{
                                            fontSize: '30px',
                                            letterSpacing: '8px',
                                            fontFamily: 'sans-serif',
                                            fontWeight: '200',
                                            lineHeight: '1.8em',
                                            textTransform: 'uppercase',
                                            }}>Math Practice</h1>
                                        <div style={{
                                            display: 'grid',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
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
                                    </div>
                                </Slide>
                                <Slide right>
                                    <div>
                                        <h1 style={{
                                            fontSize: '30px',
                                            letterSpacing: '8px',
                                            fontFamily: 'sans-serif',
                                            fontWeight: '200',
                                            lineHeight: '1.8em',
                                            textTransform: 'uppercase',
                                            }}>Dream Home</h1>
                                        <div style={{
                                            display: 'grid',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Button 
                                            color="primary"
                                            disabled
                                            variant='contained'
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
                                    </div>
                                </Slide>
                            </Carousel>
                        </Fade>
                        </MediaQuery>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Projects;