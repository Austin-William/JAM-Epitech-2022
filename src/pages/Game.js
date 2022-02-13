import React from 'react';
import '../styles/Game.scss';

function Game() {

    const [i, setI] = React.useState(0);

    const textDialog = [
        {
            "name": "Jean-Claude",
            "text": "Bonjour Henry, toutes mes condoléances. J'ai appris pour ta mère.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Merci",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Sache qu'elle va beaucoup nous manquer, elle a beaucoup contribué au groupe.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "...",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Et j'espère bien que tu prendras sa suite.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Comment ça ?",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Vois-tu, nous avions une relation de confiance entre nous, et lorsqu'elle m'a demandé de lui prêter du temps, je n'ai pas hésité une seule seconde sachant qu'elle saurait honoré sa part du marché.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Dois-je comprends que ce n'est pas le cas ?",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Effectivement, elle me devait encore 200 000 heures et j'attends de toi que tu respectes ses engagements.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "200 000 ?! Comment je pourrais avoir cette somme ? J'ai déjà du mal à vivre au jour le jour.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Très bien. Je suis prêt à t'offrir une chance. Voici 2 offres de travail, choisis-en une et cela servira de compensation. OK ?",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png'),
            "response": [
                {
                    "text": "Je prends le choix du légal.",
                    "id": "0",
                    "jump": 11
                },
                {
                    "text": "Je prends le choix du illégal.",
                    "id": "1",
                    "jump": 19
                },
                {
                    "text": "Vous êtes pas bien ? je ne travaillerai pas pour vous !",
                    "id": "2",
                    "jump": 33
                }
            ]
        },

        ////////////////////////////////// Legal choice line 11 //////////////////////////////////

        {
            "name": "Henry",
            "text": "Je vais prendre celle du légal.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Très bien, tu commenceras demain. Tu peux y aller maintenant.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Henry",
            "text": "Au revoir.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "name": "Jean-Claude",
            "text": "Au revoir, et à bientôt.",
            "image_right": require("../assets/créancier.png"),
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
                    "id": "0",
                    "jump": 21,
                },
                {
                    "text": "Non",
                    "id": "1",
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
        {
            "name": "Henry",
            "text": "Voilà, j'ai enfin fini. Ca m'aurait pris plus de temps que prévu et tous les autres sont déjà partis.",
            "image_right": "",
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Henry",
            "text": "Qu'est-ce-que c'est que ce bruit ?",
            "image_right": "",
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Henry",
            "text": "Que faites-vous ici ? Vous êtes bléssé ?",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Jean-Michel",
            "text": "Oui et il semblerait que je n'en ai plus pour très longtemps.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Henry",
            "text": "Attendez je vais appeler les secours.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Jean-Michel",
            "text": "Ca ne servira à rien. Dans ce quartier, les secours mettent beaucoup trop de temps pour arriver.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Henry",
            "text": "Dans ce quartier ? Vous venez des quartiers riches ?",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Jean-Michel",
            "text": "Vous êtes perspicaces. Effectivement, je viens des quartiezs riches et apparemment, c'est une raison valable pour vous aggressez à mort.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png'),
            "response": [
                {
                    "text": "Choix gentil",
                    "id": "0",
                    "jump": 31,
                },
                {
                    "text": "Choix méchant",
                    "id": "1",
                    "jump": 16,
                },
            ]
        },

        // Choix gentil

        {
            "name": "Henry",
            "text": "Je suis désolé que vous ayez eu à subir ça.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Jean-Michel",
            "text": "On n'y peut rien. La vie ici est dur, je suppose que t'aimerais possédé mon temps.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Henry",
            "text": "Je vais pas vous mentir, ça m'arrangerait bien. Je n'aurai plus cette dette sur les épaules.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Jean-Michel",
            "text": "Tu sais, la vie de riche n'est pas si bien que ça. Je n'ai ni famille ni amis, je suis seul.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Henry",
            "text": "Je suis dans la même situation donc ça ne changerait pas grand chose.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Jean-Michel",
            "text": "Si je peux au moins faire un cadeau avant de partir, j'aimerais que ce soit toi qui hérite de mon temps.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Henry",
            "text": "Tu es sûr ?",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Jean-Michel",
            "text": "Je n'ai personne d'autre à qui donner de toute façon.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Henry",
            "text": "... J'accepte.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Jean-Michel",
            "text": "Eh bien avec àa, je pars en faisant au moins une bonne action.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Jean-Michel",
            "text": "* est mort *",
            "image_right": require("../assets/homme_riche_qui_meurt.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },

        // Choix méchant

        {
            "name": "Henry",
            "text": "C'est le sort qui incombe à ceux qui viennent dans ce quartier.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "name": "Jean-Michel",
            "text": "Et bien on dirait que le ressentie envers les quarties riches soit plus grande que je ne l'imaginais.",
            "image_right": require("../assets/homme_riche_qui_meurt.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png'),
            "response": [
                {
                    "text": "Partir",
                    "id": "0",
                    "jump": 31,
                },
                {
                    "text": "Voler son temps",
                    "id": "1",
                    "jump": 16,
                },
            ]
        },

        // Partir

        {
            "name": "Henry",
            "text": "Je ferai mieux de prévenir la police si je ne veux pas de problème.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },

        // Voler son temps

        {
            "name": "Henry",
            "text": "Il n'aura plus besoin de son temps de toute façon. Autant lui prendre.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
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

    const [dialog, setDialog] = React.useState(textDialog[0].text);
    const [name, setName] = React.useState(textDialog[0].name);
    const [person1, setPerson1] = React.useState(textDialog[0].image_left);
    const [person2, setPerson2] = React.useState(textDialog[0].image_right);
    const [background, setBackground] = React.useState(textDialog[0].background);

    const handleResponseChoosed = (id) => {
        if (id === "0") {
            if (i < textDialog.length - 1) {
                setI(textDialog[i].response[id].jump);
                setDialog(textDialog[i + 1].text);
                setName(textDialog[i + 1].name);
                setPerson1(textDialog[i + 1].image_left);
                setPerson2(textDialog[i + 1].image_right);
                setBackground(textDialog[i + 1].background);
            }
        }
        if (id === "1") {
            if (i < textDialog.length - 1) {
                setI(textDialog[i].response[id].jump);
                setDialog(textDialog[i + 1].text);
                setName(textDialog[i + 1].name);
                setPerson1(textDialog[i + 1].image_left);
                setPerson2(textDialog[i + 1].image_right);
                setBackground(textDialog[i + 1].background);
            }
        }
        if (id === "2") {
            if (i < textDialog.length - 1) {
                setI(textDialog[i].response[id].jump);
                setDialog(textDialog[i + 1].text);
                setName(textDialog[i + 1].name);
                setPerson1(textDialog[i + 1].image_left);
                setPerson2(textDialog[i + 1].image_right);
                setBackground(textDialog[i + 1].background);
            }
        }
        if (id === "3") {
            if (i < textDialog.length - 1) {
                setI(i + 1);
                setDialog(textDialog[i + 1].text);
                setName(textDialog[i + 1].name);
                setPerson1(textDialog[i + 1].image_left);
                setPerson2(textDialog[i + 1].image_right);
                setBackground(textDialog[i + 1].background);
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
                                <button onClick={() => handleResponseChoosed('3')}>
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