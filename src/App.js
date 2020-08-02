import React, { Component } from 'react';
import Home from "./components/Home/home";
import Title from "./components/Title/title";
import MyNavBar from "./components/navbar/navbar";
import About from './components/About/about';
import './App.css';
import Skills from "./containers/skills/skills";
import Experience from './containers/experience/experience';
import Projects from "./containers/projects/projects";
import Contact from "./containers/contact/contact";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
      return (
          <div className="App">
            <MyNavBar/>
            <Home/>
            <Title/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
          </div>
      );
    }
}

export default App;
