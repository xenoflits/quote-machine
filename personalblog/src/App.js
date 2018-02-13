import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Blog from './components/blog';
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <Feature/>
        <Bar/>
        <h4> footer bar </h4>
        </div>
      </div>
    );
  }
}
*/




class App extends Component {
  render(){
    return(<div>
      <Navbar />
      <Router>
        <div>
        <Route exact path="/" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        </div>
      </Router>
      </div>
    )
  }
}
export default App;
