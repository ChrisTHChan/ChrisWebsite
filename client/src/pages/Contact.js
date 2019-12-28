import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import message from '../assets/message.jpg'
import { Button, Snackbar, SnackbarContent } from '@material-ui/core';

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            contactName: '',
            contactEmail: '',
            contactMessage: '',
            successSnackbar: false,
            catchSnackbar: false,
            fillFieldsErrorSnackbar: false,
            loadingSnackbar: false,
        }
    }

    onChangeName = (e) => {
        this.setState({contactName: e.target.value})
    }
    
    onChangeEmail = (e) => {
        this.setState({contactEmail: e.target.value})
    } 

    onChangeMessage = (e) => {
        this.setState({contactMessage: e.target.value})
    } 

    closeSuccessSnackbar = () => {
        this.setState({successSnackbar: false})
    }

    closeCatchSnackbar = () => {
        this.setState({catchSnackbar: false})
    }

    closeFillFieldsErrorSnackbar = () => {
        this.setState({fillFieldsErrorSnackbar: false})
    }

    onSubmitMessage = () => {
        if (this.state.contactName.length === 0 || this.state.contactEmail.length === 0 || this.state.contactMessage.length === 0) {
            return this.setState({fillFieldsErrorSnackbar: true})
        } else {
            this.setState({loadingSnackbar: true})
            fetch('https://nameless-lowlands-15111.herokuapp.com/contact', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.contactName,
                    email: this.state.contactEmail,
                    message: this.state.contactMessage
                })
            })
            .then(response => response.text())
            .then(indicator => {
                if (indicator === 'success') {
                    this.setState({successSnackbar: true})
                    this.setState({loadingSnackbar: false})
                    this.setState({contactName: ''})
                    this.setState({contactEmail: ''})
                    this.setState({contactMessage: ''})
                } else {
                    this.setState({catchSnackbar: true})
                    this.setState({loadingSnackbar: false})
                }
            })
            .catch(() => {
                this.setState({catchSnackbar: true})
                this.setState({loadingSnackbar: false})
            })
        }
    }

    render() {
        return(
            <div style={{
                height: '100vh',
                backgroundColor: 'black',
            }}>
                <Fade>
                    <div style ={{
                        backgroundImage: `url(${message})`,
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
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        height: '100vh',
                        width: '100vw',
                        maxWidth: '100%',
                        display: 'grid',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Fade top delay='500'>
                            <div style={{
                                height: '75vh',
                                width: '60vw',
                                display: 'grid',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <input 
                                className="contactInput"
                                placeholder='Name'
                                value={this.state.contactName}
                                style={{
                                    height: '5vh',
                                    width: '60vw',
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    boxShadow: '0px 0px 10px black',
                                    border: 'none',
                                    paddingLeft: '10px',
                                }}
                                onChange={this.onChangeName}>
                                </input>
                                <input 
                                className="contactInput"
                                placeholder='E-mail'
                                value={this.state.contactEmail}
                                style={{
                                    height: '5vh',
                                    width: '60vw',
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    boxShadow: '0px 0px 10px black',
                                    border: 'none',
                                    paddingLeft: '10px',
                                }}
                                onChange={this.onChangeEmail}>
                                </input>
                                <textarea 
                                className="contactInput"
                                placeholder="Send me a message here!"
                                value={this.state.contactMessage}
                                style={{
                                    height: '50vh',
                                    width: '60vw',
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    boxShadow: '0px 0px 10px black',
                                    border: 'none',
                                    paddingLeft: '10px',
                                    paddingTop: '10px',
                                    fontFamily: 'arial',
                                    resize: 'none',
                                }}
                                onChange={this.onChangeMessage}>
                                </textarea>
                                <Button
                                variant='contained'
                                onClick={this.onSubmitMessage}
                                >
                                    Send Your Message!
                                </Button>
                            </div>
                        </Fade>
                        <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.successSnackbar}                     
                        >
                            <SnackbarContent 
                            style={{
                                backgroundColor: 'green',
                            }}
                            message='Success! Message Sent!'
                            action={
                                <Button key='undo' color="inherit" size='small' onClick={this.closeSuccessSnackbar}>
                                    CLOSE X
                                </Button>
                            }
                            />
                        </Snackbar>
                        <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.catchSnackbar}                     
                        >
                            <SnackbarContent 
                            style={{
                                backgroundColor: 'darkred'
                            }}
                            message='Server failure. Try again later!'
                            action={
                                <Button key='undo' color="inherit" size='small' onClick={this.closeCatchSnackbar}>
                                    CLOSE X
                                </Button>
                            }
                            />
                        </Snackbar>    
                        <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.fillFieldsErrorSnackbar}                    
                        >
                            <SnackbarContent 
                            style={{
                                backgroundColor: 'darkred',
                            }}
                            message='Failed. Fill in all fields!'
                            action={
                                <Button key='undo' color="inherit" size='small' onClick={this.closeFillFieldsErrorSnackbar}>
                                    CLOSE X
                                </Button>
                            } 
                            />
                        </Snackbar>
                        <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.loadingSnackbar}             
                        >
                            <SnackbarContent
                            style={{
                                backgroundColor: 'teal'
                            }}
                            message='Loading.. Wait for results..'
                            />
                        </Snackbar>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Contact;