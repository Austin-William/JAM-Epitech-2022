import React from 'react';
import '../styles/Game.scss';

function Game() {

    const [dialog, setDialog] = React.useState("1er dialog");
    const [response1, setResponse1] = React.useState("1er reponse");
    const [response2, setResponse2] = React.useState("2eme reponse");
    const [response3, setResponse3] = React.useState("3eme reponse");
    const [person1, setPerson1] = React.useState(require("../assets/ouvrier.png"));
    const [person2, setPerson2] = React.useState(require("../assets/chef_de_chantier.png"));
    const [background, setBackground] = React.useState(require('../assets/pauvre_jour.png'));

    const handleDialog = (dialog) => {
        setDialog(dialog);
    }

    const modifyBackground = (background) => {
        setBackground(background);
    }

    const handleResponse1 = (response) => {
        setResponse1(response);
    }

    const handleResponse2 = (response) => {
        setResponse2(response);
    }

    const handleResponse3 = (response) => {
        setResponse3(response);
    }

    return (
        <div className="Game">
            <div className="Game-context">
                <img className="Game-background" src={background} alt="background" />
                <div className="Game-person-left">
                    <img src={person1} alt="person-left" />
                </div>
                <div className="Game-person-right">
                    <img src={person2} alt="person-right" />
                </div>
            </div>
            <div className="Game-dialog">
                <div className="Game-dialog-name">
                    <span>
                        nom
                    </span>
                </div>
                <div className="Game-dialog-text">
                    <p>
                        {dialog}
                    </p>
                </div>

            </div>
            <div className="Game-buttons">
                <button>
                    <span>
                        {response1}
                    </span>
                </button>
                <button>
                    <span>
                        {response2}
                    </span>
                </button>
                <button>
                    <span>
                        {response3}
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Game;