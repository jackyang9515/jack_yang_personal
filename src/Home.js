import './Home.css';
import React, {Component} from 'react';
import hackerImg from './hacker.jpg';
import linkedin from './linkedin_icon.svg';
import git from './github_icon.png';

//This import is for the front cover
import onitama from './onitama-modified.jpg';
import terminal from './terminal-modified.jpg';
import three_musk from './three_musk-modified.jpg';

//import the graduation image
import graduation from './graduation_friends.jpg';

import algunquin from './algunquin.jpg';

class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
        introduction: "I'm a third year computer science specialist at University of \
        Toronto Mississauga. I have been coding since I was 16, and I'm fluent in C, Java and Python. I\
        have completed many projects using the languages listed above, and I have also developed\
        several webpages on my spare time, and thus learned HTML, CSS, Javascript and React."
      }
    }

    scrollDownTwo = () => {
      window.scrollBy({
        top: window.innerHeight * 2,
        left: 0,
        behavior: 'smooth'
      });
    }

    scrollDownOne = () => {
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
    }

    scrollDownThree = () => {
      window.scrollBy({
        top: window.innerHeight * 3,
        left: 0,
        behavior: 'smooth'
      });
    }

    handleResume = () => {
      window.open('https://docs.google.com/document/d/1iSsuO7NQ9IEXvcCJbrZwuR-t5u4igXbPkrSxxTcIC0c/edit');
    }

    render () {
      return (
        <div className="App">
          <div className='homePage'>
            <img className="hackerPic" src={hackerImg} alt="Please imagine my face here"/>
            <button id='name' onClick={this.scrollDownOne}>Jack Yang</button>

            {/*Side bar*/}
            <div className="sidenav">
              <a href="https://www.linkedin.com/in/jack-yang-85798122b/" target="_blank">
                <input type="image" src={linkedin} className="resource" />
              </a>
              <a href="https://github.com/jackyang9515?tab=overview&from=2022-01-01&to=2022-01-22" target="_blank">
                <input type="image" src={git} className="resource" />
              </a> 
            </div>

            {/*Introduction*/}
            <div className="intro">
              <h2>Hi, my name is Jack</h2>
              <p>and I love coding :)</p>
              <button className='scrollDownButton' onClick={this.scrollDownTwo}>My Projects</button>
              <button className='scrollDownButton' onClick={this.scrollDownThree}>Contact Me</button>
            </div>
          </div>

          {/*About me section*/}
          <div className='aboutMe'>
            <div className='aboutMeBox'>
              <img className="gradPicture" src={graduation}/>
              <div className='aboutMeRight'>
                <h1 className='aboutMeTitle'>About me:</h1>
                <p className='aboutMeParagraph'>{this.state.introduction}</p>
                <button className='cvButton' onClick={this.handleResume}>View my CV</button>
              </div>
            </div>
          </div>

          {/*My project section*/}
          <div className='myProjects' id='projectSec'>
            <h1 className='myProjectsTitle'>My projects:</h1>

            <div className='myProjectsDisplay'>

              {/*The projects to be displayed*/}
              <div className="projectButtonHolder">
                <a href="/OnitamaBoardGame" target="_blank">
                  <input type="image" src={onitama} className="projectButton" />
                </a>
                <div className='projectContext'>
                  <h3>OnitamaBoardGame</h3>
                  <p className='projectExplaination'>A Japanese chess game implemented using Python</p>
                  <a href="/OnitamaBoardGame" className='viewButton'>Click to discover more</a>
                </div>
              </div>

              <div className="projectButtonHolder">
                <a href="/Myshell" target="_blank">
                  <input type="image" src={terminal} className="projectButton" />
                </a>
                <div className='projectContext'>
                  <h3>Myshell</h3>
                  <p className='projectExplaination'>A C-program that interacts with the operating system</p>
                  <a href="/Myshell" className='viewButton'>Click to discover more</a>
                </div>
              </div>

              <div className="projectButtonHolder">
                <a href="ThreeMusketeers" target="_blank">
                  <input type="image" src={three_musk} className="projectButton" />
                </a>
                <div className='projectContext'>
                  <h3>ThreeMusketeers</h3>
                  <p className='projectExplaination'>A board game implemented using Java</p>
                  <a href="/ThreeMusketeers" className='viewButton'>Click to discover more</a>
                </div>
              </div>

            </div>
          </div>

          {/*Contact me page*/}
          <div className='contactMe'>
            <div className='contactMeSec'>
              <img className="algunquinPic" src={algunquin}/>
              <div className='contactMeInfo'>
                <h1 className='contactMeTitle'>Contact me:</h1>
                <p>Phone number: +1 778-885-6219</p>
                <p>Email address: jackyangxinyue@gmail.com</p>
                <b><p>Or you can send a message to me directly here:</p></b>
              </div>
              <form action="https://formsubmit.co/jackyangxinyue@gmail.com" className='contactMeForm' method="POST">
                  <input type="text" name="name" placeholder='Your Name' className='inputPrompt' required></input>
                  <input type="email" name="email" placeholder='Your Email' className='inputPrompt' required></input>
                  <textarea type="text" name="message" placeholder="Message" className='textareaPrompt' required></textarea>
                  <button type="submit" className='submitButton'>Send</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
}

export default Home;
