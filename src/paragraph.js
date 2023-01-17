import React, {Fragment} from 'react';
import './Home.css'
import three_musk from './three_musk.jpg';
import onitama from './onitama.jpg';
import terminals from './terminals.jpg';
import backward from './backward.jpg';

import { useNavigate} from "react-router-dom";

let onitamaIntro = "The Onitama Board game is a strategic board game that was invented in 2014\
by Japanese game designer Shimpei Sato. In our project we recreated the\
game using Python and Pygame, and we treaked the rules a bit to make it\
suitable to play on the computer. In our adaptation of the game, the player\
can choose to play against another player or computer, where the computer is\
a greedy agent who tries to make the most beneficial move according to the\
current board.";

let terminalIntro = "The C terminal is a C program that implements a fully functional shell. In this\
program that we call mysh, user gets to use a lot of basic functionalities that\
exist in the terminal, such as cat, cd, ls etc. Like the terminal, users can\
also use pipeline to redirect commands, run background processes as well as opening\
several servers and send signals between them.";

let threeMuskIntro = "The three musketeers board game is also a strategic board game, invented by Haar\
Hoolim. The game has two sides, musketeers and guards, and player can choose one\
of them to play. Our version of the game was implemented using Java and Javafx,\
which is a Java module that is specialzed in game making. This project was also\
a group project, and I got familiar with Github and version control.";

const onitamaGit = () => {
    window.open('https://github.com/jackyang9515/OnitamaPythonGame');
}

const terminalGit = () => {
    window.open('https://github.com/jackyang9515/C_terminal_simulation');
}

const threeMuskGit = () => {
    window.open('https://github.com/jackyang9515/JavaMusketeerGuardGame');
}

function Paragraph (props) {

    let navigate = useNavigate();

    if (props.topic === 'onitama') {
        return (
            <Fragment>
                <div className='aboutMe'>
                    <div className='aboutMeBox'>
                        <a onClick={() => navigate(-1)}>
                            <input type="image" src={backward} className="backwardButton" />
                        </a>
                        <img className="gradPicture" src={onitama} alt='onitamaGameBoard'/>
                        <div className='aboutMeRight'>
                            <h1 className='aboutMeTitle'>Onitama Board Game:</h1>
                            <p className='aboutMeParagraph'>{onitamaIntro}</p>
                            <button className='projButton' onClick={onitamaGit}>View more on Github</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    else if (props.topic === "terminal") {
        return (
            <Fragment>
                <div className='aboutMe'>
                    <div className='aboutMeBox'>
                        <a onClick={() => navigate(-1)}>
                            <input type="image" src={backward} className="backwardButton" />
                        </a>
                        <img className="gradPicture" src={terminals} alt='onitamaGameBoard'/>
                        <div className='aboutMeRight'>
                            <h1 className='aboutMeTitle'>Myshell Program:</h1>
                            <p className='aboutMeParagraph'>{terminalIntro}</p>
                            <button className='projButton' onClick={terminalGit}>View more on Github</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    else if (props.topic === "three_musk") {
        return (
            <Fragment>
                <div className='aboutMe'>
                    <div className='aboutMeBox'>
                        <a onClick={() => navigate(-1)}>
                            <input type="image" src={backward} className="backwardButton" />
                        </a>
                        <img className="threeMuskPic" src={three_musk} alt='onitamaGameBoard'/>
                        <div className='aboutMeRight'>
                            <h1 className='aboutMeTitle'>Three Musketeers:</h1>
                            <p className='aboutMeParagraph'>{threeMuskIntro}</p>
                            <button className='projButton' onClick={threeMuskGit}>View more on Github</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}



export default Paragraph;