import React from 'react';
import '../styles/Game.scss';

function Game() {

    const [i, setI] = React.useState(0);

    const textDialog = [
        {
            "name": "Jean-Claude",
            "text": "Bonjour Henry, toutes mes condoléances. J'ai appris pour ta mère.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Merci",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Sache qu'elle va beaucoup nous manquer, elle a beaucoup contribué au groupe.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "...",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Et j'espère bien que tu prendras sa suite.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Comment ça ?",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Vois-tu, nous avions une relation de confiance entre nous, et lorsqu'elle m'a demandé de lui prêter du temps, je n'ai pas hésité une seule seconde sachant qu'elle saurait honoré sa part du marché.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Dois-je comprends que ce n'est pas le cas ?",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Effectivement, elle me devait encore 200 000 heures et j'attends de toi que tu respectes ses engagements.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "200 000 ?! Comment je pourrais avoir cette somme ? J'ai déjà du mal à vivre au jour le jour.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Très bien. Je suis prêt à t'offrir une chance. Voici 2 offres de travail, choisis-en une et cela servira de compensation. OK ?",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png'),
            "response": [
                {
                    "text": "Je prends le choix du légal.",
                    "id": "1",
                    "jump": 11
                },
                {
                    "text": "Je prends le choix du illégal.",
                    "id": "2",
                    "jump": 19
                },
                {
                    "text": "Vous êtes pas bien ? je ne travaillerai pas pour vous !",
                    "id": "3",
                    "jump": 23
                }
            ]
        },

        ////////////////////////////////// Legal choice line 11 //////////////////////////////////

        {
            "name": "Henry",
            "text": "Je vais prendre celle du légal.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Très bien, tu commenceras demain. Tu peux y aller maintenant.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Au revoir.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Au revoir, et à bientôt.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Cela faisait maintenant plusieurs semaines que je travaillais sur le chantier et je commençais à m'habituer à l'ambiance de travail. Soudain mon superieur m'interpela.",
            "image_right": "",
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Henry, alors tu t'habitues au chantier ?",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Oui je commence.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Dis moi, j'aurai une question. Sur la partie nord du chantier, on commence à accumuler du retard. Ca te dirait de faire des heures supplémentaires pour combler ça ? moyenant finance bien-sur.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png'),
            "response": [
                {
                    "text": "Oui",
                    "id": "1",
                    "jump": 11,
                },
                {
                    "text": "Non",
                    "id": "2",
                    "jump": 16,
                },
            ]
        },
        // Yes
        {
            "name": "Henry",
            "text": "Bien sû, ça ne me dérange pas.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Très bien, tu peux commencer ce soir, sinon ça va vraiment devenir un problème si on enchaine trop de retard.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "C'est compris.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },

        // No

        {
            "name": "Henry",
            "text": "Je suis désolé, mais j'ai autre chose à faire le soir, donc je serai indisponible.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Dommage, je ne pensais pas que tu refuserais. Pas grave, je vais demander à quelqu'un d'autre. Dit moi si tu changes d'avis.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Compris, au revoir",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },

        ////////////////////////////////// Illegal choice //////////////////////////////////

        {
            "name": "Henry",
            "text": "Je vais prendre celle du illégal.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Très bien, tu saura les modalités de ce travail dans les prochains jours. Tu peux y aller maintenant.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Au revoir.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Au revoir, et à bientôt.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },

        ////////////////////////////////// None choice //////////////////////////////////

        {
            "name": "Henry",
            "text": "Je refuse.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Je ne crois pas que ce soit une option.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Et pourtant si, je m'en vais.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Tuez-le !",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier_mort.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "dead": true,
        }
    ];

    const [dialog, setDialog] = React.useState(textDialog[i].text);
    const [name, setName] = React.useState(textDialog[i].name);
    const [person1, setPerson1] = React.useState(textDialog[i].image_left);
    const [person2, setPerson2] = React.useState(textDialog[i].image_right);
    const [background, setBackground] = React.useState(textDialog[i].background);

    const handleResponseChoosed = (id) => {
        if (id === "1") {
            if (i < textDialog.length - 1) {
                setI(textDialog[i].response[id].jump);
                setDialog(textDialog[11].text);
                setName(textDialog[11].name);
                setPerson1(textDialog[11].image_left);
                setPerson2(textDialog[11].image_right);
                setBackground(textDialog[11].background);
            }
        }
        else if (id === "2") {
            if (i < textDialog.length - 1) {
                setI(textDialog[i].response[id].jump);
                setDialog(textDialog[i].text);
                setName(textDialog[i].name);
                setPerson1(textDialog[i].image_left);
                setPerson2(textDialog[i].image_right);
                setBackground(textDialog[i].background);
            }
        }
        else if (id === "3") {
            if (i < textDialog.length - 1) {
                setI(textDialog[i].response[id].jump);
                setDialog(textDialog[19].text);
                setName(textDialog[19].name);
                setPerson1(textDialog[19].image_left);
                setPerson2(textDialog[19].image_right);
                setBackground(textDialog[19].background);
            }
        } else if (id === "4") {
            setDialog(textDialog[i].text);
            setName(textDialog[i].name);
            setPerson1(textDialog[i].image_left);
            setPerson2(textDialog[i].image_right);
            setBackground(textDialog[i].background);
            if (i <= textDialog.length - 1) {
                setI(i + 1);
            }
        }
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
                        {name}
                    </span>
                </div>
                <div className="Game-dialog-text">
                    <p>
                        {dialog}
                    </p>

                </div>
            </div>
            {
                textDialog[i].dead ?
                    <div className="Game-condition-dead">
                        VOUS ÊTES MORT !
                    </div>
                    :
                    <div className="Game-buttons">
                        {
                            textDialog[i].response ?
                                textDialog[i].response.map((response, index) => {
                                    return (
                                        <button key={index} onClick={() => handleResponseChoosed(response.id)}>
                                            {response.text}
                                        </button>
                                    )
                                })
                                :
                                <button id="4" onClick={() => handleResponseChoosed('4')} value="4">
                                    <span>
                                        Suivant
                                    </span>
                                </button>
                        }
                    </div>
            }
            {
                textDialog[i].win ?
                    <div className="Game-condition-win">
                        VOUS AVEZ GAGNÉ !
                    </div>
                    :
                    null
            }
        </div>
    );
}


export default Game;