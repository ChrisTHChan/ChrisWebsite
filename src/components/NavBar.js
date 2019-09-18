import React, {Component} from 'react';
import {Link} from "react-router-dom"

class NavBar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 7fr',
                position: 'fixed',
                width: '100vw',
                height: '10vh',
                justifyItems: 'center',
                alignContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: 'white',
                zIndex: '2',
              }}>
                <p><Link to='/' className="navBarLink">Home</Link></p>
                <p><Link to='/projects/'className="navBarLink">Projects</Link></p>
                <p><Link to='/resume/' className="navBarLink">Resume</Link></p>
                <p><a className="navBarLink" href="https://github.com/mrchrischan">GitHub</a></p>
                <p><Link to='/blog/' className='navBarLink'>Blog</Link></p>
                <div></div>
              </div>
        )
    }
}

export default NavBar