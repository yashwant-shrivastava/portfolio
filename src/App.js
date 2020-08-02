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
import particleOptions from './components/particle-background/particle';
import Particles from "react-particles-js";


class App extends Component {
  render() {
      return (
          <div className="App">
            <MyNavBar/>
            <Home/>
            <Particles className="particles particles-box" params={particleOptions} />
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
