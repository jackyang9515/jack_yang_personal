import React, {Fragment} from 'react';
import './paragraph.css';
import graduation from './graduation_friends.jpeg';
import sunset from './sunset_at_bahamas.jpeg';
import spanish from './learn_spanish.jpg';
import three_musk from './three_musk.jpeg';
import onitama from './onitama.jpeg';
import linkedin from './linkedin_icon.svg';
import git from './github_icon.png';
import terminal from './terminal.webp';

function Paragraph (props) {

    if (props.topic === 'About me') {
        return (
            <Fragment>
            <div className="display">
                <img className="item picture" src={graduation} alt="Please imagine my face here"/>
                <div className="item text">
                    <h2>About Me</h2>
                    <p>Hi there, my name is Jack and I’m a 3rd year computer science specialist at UTM.</p>
                    <p>I completed my middle school and highschool in Vancouver and I came to Toronto 2</p> 
                    <p>years ago for college. Personally I like Toronto better, just because the city</p> 
                    <p>is bigger and has more places for exploration. Now that I’ve got used to Toronto’s</p>
                    <p>weather, it feels more like home than Vancouver and Suzhou, where my true hometown is. </p>
                </div>
            </div>

            <p></p>

            <div className="display">
            <div className="item" id="second_paragraph">
                <h2>My Hobbies</h2>
                <p>In my spare time I also like learning Spanish and playing badminton. To me,</p>
                <p>learning a new language means that I can get to know a culture that is completely</p>
                <p>new for someone of my background. Up till now I can make some basic conversations</p>
                <p>in Spanish and if I’m suddenly thrown off to Latin America, I won’t starve to</p>
                <p>death (LOL).</p>
            </div>
            <img className="item picture" src={spanish} alt="Please imagine my face here"/>
            </div>

            <p></p>

            <div className="display">
            <img className="item picture" src={sunset} alt="Please imagine my face here"/>
            <div className="item text">
                <h2>Travelling</h2>
                <p>I also love traveling. This summer I went to the Bahamas, where I enjoyed</p>
                <p>the beach and sunshine. Unlike Toronto, the sand on the beach there is</p>
                <p>incredibly soft, and the water is always crystal clear. If you have</p>
                <p>never been before, it is a must-go (^_^).</p>
            </div>
            </div>
            </Fragment>
        )
    }

    else if (props.topic === "Contact me") {
        return (
            <Fragment>
                <div className="contact_background">
                    <div className="contact_info"> 
                        <h2>My contact information</h2>
                        <b>Phone Number:</b>
                        <span><p>+1 778-885-6219</p></span>
                        <b>E-mail Address:</b>
                        <span><p>jackyangxinyue@gmail.com</p></span>

                        <h3 className="gap">Portal to my Linkedin and Github dashboard:</h3>
                        <a href="https://www.linkedin.com/in/jack-yang-85798122b/" target="_blank">
                            <input type="image" src={linkedin} className="icon" />
                        </a>
                        <a href="https://github.com/jackyang9515?tab=overview&from=2022-01-01&to=2022-01-22" target="_blank">
                            <input type="image" src={git} className="icon" />
                        </a>    
                    </div>
                </div>
            </Fragment>
        )
    }

    else if (props.topic === "My projects") {
        return (
            <Fragment>
                <div className="display">
                    <img className="item picture" src={onitama} alt="Please imagine my face here"/>
                    <div className="item text">
                        <h2>My Projects: Onitama Board Game</h2>
                        <p>The Onitama Board game is a strategic board game that was invented in 2014</p>
                        <p>by Japanese game designer Shimpei Sato. In our project we recreated the</p> 
                        <p>game using Python and Pygame, and we treaked the rules a bit to make it</p> 
                        <p>suitable to play on the computer. In our adaptation of the game, the player</p>
                        <p>can choose to play against another player or computer, where the computer is</p>
                        <p>a greedy agent who tries to make the most beneficial move according to the</p>
                        <p>current board.</p>
                    </div>
                </div>

                <p></p>

                <div className="display">
                <div className="item" id="second_paragraph">
                    <h2>C Terminal</h2>
                    <p>The C terminal is a C program that implements a fully functional shell. In this</p>
                    <p>program that we call mysh, user gets to use a lot of basic functionalities that</p>
                    <p>exist in the terminal, such as cat, cd, ls etc. Like the terminal, users can</p>
                    <p>also use pipeline to redirect commands, run background processes as well as opening</p>
                    <p>several servers and send signals between them.</p>
                </div>
                <img className="item picture" src={terminal} alt="Please imagine my face here"/>
                </div>

                <p></p>

                <div className="display">
                <img className="item picture" src={three_musk} alt="Please imagine my face here"/>
                <div className="item text">
                    <h2>Three Musketeers Board Game</h2>
                    <p>The three musketeers board game is also a strategic board game, invented by Haar</p>
                    <p>Hoolim. The game has two sides, musketeers and guards, and player can choose one</p>
                    <p>of them to play. Our version of the game was implemented using Java and Javafx,</p>
                    <p>which is a Java module that is specialzed in game making. This project was also</p>
                    <p>a group project, and I got familiar with how to use Github when there are multiple</p>
                    <p>people pushing and pulling at the same time.</p>
                </div>
                </div>
            </Fragment>
        )
    }
}



export default Paragraph;