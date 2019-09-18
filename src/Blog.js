import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class Blog extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: '',
        }
    }

    render() {
        return(
            <Fade>
                <div style={{
                    height: '100vh',
                    width: '100vw',
                    display: 'grid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'black',
                }}>
                    <h1 style={{color: 'white'}}>COMING SOON</h1>
                </div>
            </Fade>
        )
    }
}

export default Blog;