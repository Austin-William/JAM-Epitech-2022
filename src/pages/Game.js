import React from 'react';
import '../styles/Game.scss';

function Game() {

    const [dialog, setDialog] = React.useState("1er dialog");

    const handleDialog = (dialog) => {
        setDialog(dialog);
    }

    return (
        <div className="Game">
            <div className="Game-context">
                <div className="Game-background">
                    <img src="https://avatars.githubusercontent.com/u/55129304?v=4" alt="background" />
                </div>
                <div className="Game-person-left">
                    <img src="https://avatars.githubusercontent.com/u/55129304?v=4" alt="person" />
                </div>
                <div className="Game-person-right">
                    <img src="https://avatars.githubusercontent.com/u/55129304?v=4" alt="person" />
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