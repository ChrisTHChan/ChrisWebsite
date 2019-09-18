import React, {Component} from 'react';
import writing from './writing.jpg'
import Fade from 'react-reveal/Fade'
import { Button } from '@material-ui/core';

class ResumePage extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: '',
        }
    }

    render() {
        return(
            <div>
                <Fade>
                    <div style ={{
                        backgroundImage: `url(${writing})`,
                        height: '100vh',
                        width: '100vw',
                        maxWidth: '100%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        position: 'fixed',
                        zIndex: '-1',
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
                        <Fade top delay='500'>
                            <div style={{
                                backgroundColor: 'white',
                                height: '70vh',
                                width: '60vw',
                                borderRadius: '15px',
                                boxShadow: '0px 0px 30px black',
                                display: 'grid',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Fade delay="1200">
                                    <div style={{textAlign: 'center'}}>
                                        <p style={{
                                            fontSize: '16px',
                                            letterSpacing: '4px',
                                            fontFamily: 'sans-serif',
                                            fontWeight: '200',
                                            lineHeight: '1.8em',
                                            textTransform: 'uppercase'
                                        }}>Below is a link to view or download my resume:</p>
                                        <Button
                                        href="https://drive.google.com/file/d/1v23fqNoUt-OzwT3BZNEdxMnUBbS3riDE/view?usp=sharing"
                                        color="primary"
                                        variant='contained'>
                                          Download!
                                        </Button>
                                        <p style={{
                                            fontSize: '16px',
                                            letterSpacing: '4px',
                                            fontFamily: 'sans-serif',
                                            fontWeight: '200',
                                            lineHeight: '1.8em',
                                            textTransform: 'uppercase'
                                        }}>
                                            Enjoy!
                                        </p>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default ResumePage;