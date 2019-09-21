import React, {Component} from 'react';
import {Link} from "react-router-dom"
import cimage from '../assets/C.png'
import menuIcon from '../assets/menu.png'
import Slide from 'react-reveal/Slide';

class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            menuState: 'closed'
        }
    }

    toggleMenu = () => {
        if (this.state.menuState === 'closed') {
            this.setState({menuState: 'open'})
        } else {
            this.setState({menuState: 'closed'})
        }
    }

    render() {
        return (
            <div>
                <Slide top when={this.state.menuState === 'open'}>
                    <div style={{
                        position: 'fixed',
                        height: '10vh',
                        width: '100vw',
                        maxWidth: '100%',
                        backgroundColor: 'black',
                        zIndex: '4',
                        display: this.state.menuState === 'closed' ? 'none' : 'grid',
                        justifyContent: 'end',
                    }}>
                        <div>
                            <p
                            className='closeMenu'
                            onClick={this.toggleMenu}>X</p>
                        </div>
                    </div>
                    <div style={{
                        position: 'fixed',
                        height: '100vh',
                        width: '100vw',
                        maxWidth: '100%',
                        backgroundColor: 'black',
                        zIndex: '3',
                        display: this.state.menuState === 'closed' ? 'none' : 'grid',
                        gridTemplateRows: '2fr 1fr 1fr 1fr 1fr 1fr 2fr',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <div></div>
                        <Link onClick={this.toggleMenu} to='/' className="navBarLink">Home</Link>
                        <Link onClick={this.toggleMenu} to='/projects/'className="navBarLink">Projects</Link>
                        <Link onClick={this.toggleMenu} to='/resume/' className="navBarLink">Resume</Link>
                        <a onClick={this.toggleMenu} className="navBarLink" href="https://github.com/mrchrischan">GitHub</a>
                        <Link onClick={this.toggleMenu} to='/contact/' className='navBarLink'>Contact</Link>
                        {/* <p className='navBarLink' onClick={this.toggleMenu}>X Close</p> */}
                        <div></div>
                    </div>
                </Slide>
                <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        position: 'fixed',
                        width: '100vw',
                        height: '10vh',
                        alignContent: 'center',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        zIndex: '2',
                    }}>
                    <div style={{
                        display: 'grid',
                        justifyContent: 'start',
                        paddingLeft: '15px',
                    }}>
                        <div>
                            <Link to='/'><img src={cimage} 
                                alt='' 
                                style={{
                                    height: '6.5vh',
                                    width: 'auto',
                                    marginTop: '1.75vh',
                                    marginBottom: '1.75vh',
                            }} /></Link>
                        </div>
                    </div>
                    <div style={{
                            display: 'grid',
                            justifyContent: 'end',
                            paddingRight: '15px',
                        }}>
                        <div>
                            <img 
                            className="menuIcon"
                            src={menuIcon} 
                            alt=''
                            style={{
                                height: '10vh',
                                width: 'auto',
                            }} 
                            onClick={this.toggleMenu}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar