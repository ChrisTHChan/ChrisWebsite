import React, {Component} from 'react';
import './App.css'
import NavBar from './NavBar.js'
import Home from './Home.js'
import ResumePage from './ResumePage.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from './Projects.js'
import Blog from './Blog.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      placeholder: '',
    }
  }

  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume/" component={ResumePage} />
          <Route path="/projects/" component={Projects} />
          <Route path="/blog/" component={Blog} />
        </Switch>
      </Router>
    )
  }
}

export default App;
