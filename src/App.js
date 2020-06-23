import React from 'react';
import Header from './components/Header/';
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";
import Contact from "./components/Contact";
import Portfolio from "./components/Porfolio/Portfolio";
import About from "./components/About";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />       
        <Switch>
            <Route path='/contact' render={ () => <Contact/> }/>  
            <Route path='/portfolio' render={ () => <Portfolio/> }/>  
            <Route path='/aboutme' render={ () => <About/> }/>  
            <Route exact path='/' render={() => <Home/>} /> 
        </Switch>
        <Footer/>
      </div>

  );
}

export default App;
