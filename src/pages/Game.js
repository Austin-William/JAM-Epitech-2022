import React from 'react';
import '../styles/Game.scss';

function Game() {

    const [dialog, setDialog] = React.useState("1er dialog");
    const [background, setBackground] = React.useState(require('../assets/pauvre_jour.png'));

    const handleDialog = (dialog) => {
        setDialog(dialog);
    }

    const modifyBackground = (background) => {
        setBackground(background);
    }

    return (
        <div className="Game">
            <div className="Game-context">
                <img className="Game-background" src={background} alt="background" />
                <div className="Game-person-left">
                    <img src="https://avatars.githubusercontent.com/u/55129304?v=4" alt="person-left" />
                </div>
                <div className="Game-person-right">
                    <img src="https://avatars.githubusercontent.com/u/55129304?v=4" alt="person-right" />
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
                        Réponse 1
                    </span>
                </button>
                <button>
                    <span>
                        Réponse 2
                    </span>
                </button>
                <button>
                    <span>
                        Réponse 3
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Game;