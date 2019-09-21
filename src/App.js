import React, {Component} from 'react';
import './App.css'
import NavBar from './components/NavBar.js'
import Home from './pages/Home.js'
import ResumePage from './pages/ResumePage.js'
import { HashRouter, Route, Switch } from "react-router-dom";
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js'

//Finish contact page
//add a footer that will be a full screen essentially on homepage, with contact information, and footer links
//make buttons smaller for mobile settings in project page
//possibly create new menu for smaller vh's, or just make font smaller on smaller vh's

class App extends Component {
  constructor() {
    super()
    this.state = {
      placeholder: '',
    }
  }

  render() {
    return (
      <HashRouter basename='/'>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume/" component={ResumePage} />
          <Route path="/projects/" component={Projects} />
          <Route path="/contact/" component={Contact} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
