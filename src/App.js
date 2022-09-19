//import logo from './logo.svg';
//import Button from './Button';
import './App.css';
import selfie from './selfie.jpeg';
import React, {Component} from 'react';
import Paragraph from './paragraph';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        currentTab: 'About me'
      }
    }

    handleAboutMe = () => {
      this.setState({currentTab: 'About me'});
      console.log(this.state.currentTab);
    }

    handleMyProj = () => {
      this.setState({currentTab: 'My projects'});
      console.log(this.state.currentTab);
    }

    handleResume = () => {
      window.open('https://docs.google.com/document/d/1RzAe1Ny9mSwTw3sd3JpxXj1LMpEOG5SVvnt5QSg7JR0/edit?usp=sharing');
    }

    handleContactMe = () => {
      this.setState({currentTab: 'Contact me'});
      console.log(this.state.currentTab);
    }

    render () {
      return (
        <div className="App">
          <div className="headbar">

            {/*top left logo*/}
            <p className="headbar_element" id="name">Jack Yang</p>

            {/*button about me*/}
            <button className="headbar_element top_button" onClick={this.handleAboutMe}>About me</button>
            <p className="headbar_element" id="divider">|</p>

            {/*button contact me, shows my contact info*/}
            <button className="headbar_element top_button" onClick={this.handleContactMe}>Contact me</button>
            <p className="headbar_element" id="divider">|</p>

            {/*button resume, redirects user to my google doc*/}
            <button className="headbar_element top_button" onClick={this.handleResume}>Resume</button>
            <p className="headbar_element" id="divider">|</p>

            {/*button github, redirects user to my git acc*/}
            <button className="headbar_element top_button" onClick={this.handleMyProj}>My Projects</button>

          </div>
        
        {/* Changes whatever is listed below the button panel*/}
        <Paragraph topic={this.state.currentTab}/>
        </div>
      );
    }
}

/*
function handleClick() {
  return (

  )
}
*/

export default App;
