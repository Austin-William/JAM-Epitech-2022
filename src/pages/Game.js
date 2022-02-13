import React from 'react';
import '../styles/Game.scss';

function Game() {

    const [i, setI] = React.useState(0);

    const textDialog = [
        {
            "nb": 0,
            "name": "Jean-Claude",
            "text": "Bonjour Henry, toutes mes condoléances. J'ai appris pour ta mère.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 1,
            "name": "Henry",
            "text": "Merci",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 2,
            "name": "Jean-Claude",
            "text": "Sache qu'elle va beaucoup nous manquer, elle a beaucoup contribué au groupe.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 3,
            "name": "Henry",
            "text": "...",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 4,
            "name": "Jean-Claude",
            "text": "Et j'espère bien que tu prendras sa suite.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 5,
            "name": "Henry",
            "text": "Comment ça ?",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 6,
            "name": "Jean-Claude",
            "text": "Vois-tu, nous avions une relation de confiance entre nous, et lorsqu'elle m'a demandé de lui prêter du temps, je n'ai pas hésité une seule seconde sachant qu'elle saurait honoré sa part du marché.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 7,
            "name": "Henry",
            "text": "Dois-je comprends que ce n'est pas le cas ?",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 8,
            "name": "Jean-Claude",
            "text": "Effectivement, elle me devait encore 200 000 heures et j'attends de toi que tu respectes ses engagements.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 9,
            "name": "Henry",
            "text": "200 000 ?! Comment je pourrais avoir cette somme ? J'ai déjà du mal à vivre au jour le jour.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 10,
            "name": "Jean-Claude",
            "text": "Très bien. Je suis prêt à t'offrir une chance. Voici 2 offres de travail, choisis-en une et cela servira de compensation. OK ?",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png'),
            "response": [
                {
                    "text": "Je prends le choix du légal.",
                    "id": 0,
                    "jump": 11
                },
                {
                    "text": "Je prends le choix du illégal.",
                    "id": 1,
                    "jump": 68
                },
                {
                    "text": "Vous êtes pas bien ? je ne travaillerai pas pour vous !",
                    "id": 2,
                    "jump": 33
                }
            ]
        },

        ////////////////////////////////// Legal choice line 11 //////////////////////////////////

        {
            "nb": 11,
            "name": "Henry",
            "text": "Je vais prendre celle du légal.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 12,
            "name": "Jean-Claude",
            "text": "Très bien, tu commenceras demain. Tu peux y aller maintenant.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 13,
            "name": "Henry",
            "text": "Au revoir.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 14,
            "name": "Jean-Claude",
            "text": "Au revoir, et à bientôt.",
            "image_right": require("../assets/créancier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 15,
            "name": "Henry",
            "text": "Cela faisait maintenant plusieurs semaines que je travaillais sur le chantier et je commençais à m'habituer à l'ambiance de travail. Soudain mon superieur m'interpela.",
            "image_right": "",
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 16,
            "name": "Jean-Claude",
            "text": "Henry, alors tu t'habitues au chantier ?",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 17,
            "name": "Henry",
            "text": "Oui je commence.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 18,
            "name": "Jean-Claude",
            "text": "Dis moi, j'aurai une question. Sur la partie nord du chantier, on commence à accumuler du retard. Ca te dirait de faire des heures supplémentaires pour combler ça ? moyenant finance bien-sur.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png'),
            "response": [
                {
                    "text": "Oui",
                    "id": 0,
                    "jump": 22,
                },
                {
                    "text": "Non",
                    "id": 1,
                    "jump": 64,
                },
            ]
        },
        // Yes
        {
            "nb": 19,
            "name": "Henry",
            "text": "Bien sûr, ça ne me dérange pas.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 20,
            "name": "Jean-Claude",
            "text": "Très bien, tu peux commencer ce soir, sinon ça va vraiment devenir un problème si on enchaine trop de retard.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 21,
            "name": "Henry",
            "text": "C'est compris.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 22,
            "name": "Henry",
            "text": "Voilà, j'ai enfin fini. Ca m'aurait pris plus de temps que prévu et tous les autres sont déjà partis.",
            "image_right": "",
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 23,
            "name": "Henry",
            "text": "Qu'est-ce-que c'est que ce bruit ?",
            "image_right": "",
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 24,
            "name": "Henry",
            "text": "Que faites-vous ici ? Vous êtes bléssé ?",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 25,
            "name": "Jean-Michel",
            "text": "Oui et il semblerait que je n'en ai plus pour très longtemps.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 26,
            "name": "Henry",
            "text": "Attendez je vais appeler les secours.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 27,
            "name": "Jean-Michel",
            "text": "Ca ne servira à rien. Dans ce quartier, les secours mettent beaucoup trop de temps pour arriver.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 28,
            "name": "Henry",
            "text": "Dans ce quartier ? Vous venez des quartiers riches ?",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 29,
            "name": "Jean-Michel",
            "text": "Vous êtes perspicaces. Effectivement, je viens des quartiezs riches et apparemment, c'est une raison valable pour vous aggressez à mort.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png'),
            "response": [
                {
                    "text": "Choix gentil",
                    "id": 0,
                    "jump": 30,
                },
                {
                    "text": "Choix méchant",
                    "id": 1,
                    "jump": 52,
                },
            ]
        },

        // Choix gentil

        {
            "nb": 30,
            "name": "Henry",
            "text": "Je suis désolé que vous ayez eu à subir ça.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 31,
            "name": "Jean-Michel",
            "text": "On n'y peut rien. La vie ici est dur, je suppose que t'aimerais possédé mon temps.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 32,
            "name": "Henry",
            "text": "Je vais pas vous mentir, ça m'arrangerait bien. Je n'aurai plus cette dette sur les épaules.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 33,
            "name": "Jean-Michel",
            "text": "Tu sais, la vie de riche n'est pas si bien que ça. Je n'ai ni famille ni amis, je suis seul.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 34,
            "name": "Henry",
            "text": "Je suis dans la même situation donc ça ne changerait pas grand chose.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 35,
            "name": "Jean-Michel",
            "text": "Si je peux au moins faire un cadeau avant de partir, j'aimerais que ce soit toi qui hérite de mon temps.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 36,
            "name": "Henry",
            "text": "Tu es sûr ?",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 37,
            "name": "Jean-Michel",
            "text": "Je n'ai personne d'autre à qui donner de toute façon.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 38,
            "name": "Henry",
            "text": "... J'accepte.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 39,
            "name": "Jean-Michel",
            "text": "Eh bien avec ça, je pars en faisant au moins une bonne action.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 40,
            "name": "Jean-Michel",
            "text": "* est mort *",
            "image_right": require("../assets/homme_riche_qui_meurt.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 41,
            "name": "Henry",
            "text": "Grâce au temps que l'homme m'a donné, j'ai pu remboursé ma dette. Cependant, l'homme ne m'avait pas seulement donné son temps, il m'avait aussi légué tout ses biens. Grace à ça, je pus m'installer dans les quartiers riches et reprendre son affaire, m'assurant un avenir. Ce soir là, la police c'était assuré que je n'avais pas volé son temps en regardant un document que seul eux on accès. Si j'avait pris son temps sans son accords ça se serait vu et j'aurais fini en prison. Cependant ma soudaine apparition ne fait pas plaisir aux autres riches. J'ai un entretien avec un d'entre eux qui est très influant, cette discussion pourrait bien scellé mon sort.",
            "image_right": "",
            "image_left": require("../assets/homme_riche.png"),
            "background": require('../assets/villa.png')
        },
        {
            "nb": 42,
            "name": "Jean-Riche",
            "text": "Bonjour Henry, Comment se passe ta nouvelle vie ?",
            "image_right": require("../assets/gorilla.png"),
            "image_left": require("../assets/homme_riche.png"),
            "background": require('../assets/villa.png')
        },
        {
            "nb": 43,
            "name": "Henry",
            "text": "Très bien, je suis content que me posiez la question.",
            "image_right": require("../assets/gorilla.png"),
            "image_left": require("../assets/homme_riche.png"),
            "background": require('../assets/villa.png')
        },
        {
            "nb": 44,
            "name": "Jean-Riche",
            "text": "Cessons les bavardages, vous savez pourquoi je vous ai fais venir. Moi et beaucoup d'autres n'apprécient pas qu'un rat des bas quartiers viennent soudainement nous rejoindre. Cependant, je suis prêt à vous laisser une chance. ",
            "image_right": require("../assets/gorilla.png"),
            "image_left": require("../assets/homme_riche.png"),
            "background": require('../assets/villa.png')
        },
        {
            "nb": 45,
            "name": "Jean-Riche",
            "text": "Si vous réussissez à me convaincre que vos intentions sont louables, je ferai en sorte que votre séjour ici se passe le mieux possible, sinon, j'ai bien peur que votre chemin soit plus court que vous ne l'espéreriez.",
            "image_right": require("../assets/gorilla.png"),
            "image_left": require("../assets/homme_riche.png"),
            "background": require('../assets/villa.png'),
            "response": [
                {
                    "text": "Choix gentil",
                    "id": 0,
                    "jump": 46,
                },
                {
                    "text": "Choix méchant",
                    "id": 1,
                    "jump": 49,
                },
            ]
        },

        // Choix gentil riche

        {
            "nb": 46,
            "name": "Henry",
            "text": "Ne vous inquiétez pas, je n'ai jamais eu de mauvaises intentions particulières lors de ma venue ici. Soyez sans crainte.",
            "image_right": require("../assets/gorilla.png"),
            "image_left": require("../assets/homme_riche.png"),
            "background": require('../assets/villa.png')
        },
        {
            "nb": 47,
            "name": "Jean-Riche",
            "text": "Si nous sommes d'accord sur ce point, il n'y a pas de problème.",
            "image_right": require("../assets/gorilla.png"),
            "image_left": require("../assets/homme_riche.png"),
            "background": require('../assets/villa.png')
        },
        {
            "nb": 48,
            "win": true,
            "text": "Vous avez fini le jeu en étant riche. Félicitations !",
            "background": require('../assets/villa.png')
        },

        // Choix méchant riche

        {
            "nb": 49,
            "name": "Henry",
            "text": "Je ne vous dois rien, je vivrai ma vie comme je l'entends.",
            "image_right": "",
            "image_left": require("../assets/homme_riche.png"),
            "background": require('../assets/villa.png')
        },
        {
            "nb": 50,
            "name": "Jean-Riche",
            "text": "C'est ce que nous verrons",
            "image_right": require("../assets/gorilla.png"),
            "image_left": require("../assets/homme_riche.png"),
            "background": require('../assets/villa.png')
        },
        {
            "nb": 51,
            "poor": true,
            "text": "Vous avez fini le jeu en étant pauvre. Dommage !",
            "background": require('../assets/pauvre_jour.png')
        },

        // Choix méchant

        {
            "nb": 52,
            "name": "Henry",
            "text": "C'est le sort qui incombe à ceux qui viennent dans ce quartier.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 53,
            "name": "Jean-Michel",
            "text": "Et bien on dirait que le ressentie envers les quarties riches soit plus grande que je ne l'imaginais.",
            "image_right": require("../assets/homme_riche_qui_meurt.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png'),
            "response": [
                {
                    "text": "Partir",
                    "id": 0,
                    "jump": 31,
                },
                {
                    "text": "Voler son temps",
                    "id": 1,
                    "jump": 16,
                },
            ]
        },

        // Partir

        {
            "nb": 54,
            "name": "Henry",
            "text": "Je ferai mieux de prévenir la police si je ne veux pas de problème.",
            "image_right": require("../assets/homme_riche_qui_se_fait_taper.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 55,
            "name": "",
            "text": "Plusieurs jours après, l'affaire commençait déjà à être oublier et moi, je retournais à mon quotidien.",
            "image_right": "",
            "image_left": "",
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 56,
            "rip": true,
            "text": "Vous avez fini le jeu en étant pauvre. Dommage !",
            "background": require('../assets/pauvre_nuit.png')
        },

        // Voler son temps

        {
            "nb": 57,
            "name": "",
            "text": "Plusieurs jours ce sont passé depuis que j'ai volé le temps de l'homme.",
            "image_right": "",
            "image_left": "",
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 58,
            "name": "Le policier",
            "text": "Bonjour monsieur, je suis la police. Puis-je vous parler une minute ?",
            "image_right": require("../assets/policier.jpg"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 59,
            "name": "Henry",
            "text": "Bonjour, qu'est-ce-qu'il se passe ?",
            "image_right": require("../assets/policier.jpg"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 60,
            "name": "Le policier",
            "text": "Il se passe que nous avons détécter un échange de temps ilégale entre vous et l'homme décéde dans le coin il y a quelques jours. Vous n'etes probablement pas au courant mais tout échange de temps entre 2 personnes est notifier par nos services.",
            "image_right": require("../assets/policier.jpg"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 61,
            "name": "Henry",
            "text": "Je n'étais pas au courant.",
            "image_right": require("../assets/policier.jpg"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 62,
            "name": "Le policier",
            "text": "Encore heureux, suel les personnes qui enfreignent les règles, comme vous, sont au courant. Je vous invite donc à me suivre.",
            "image_right": require("../assets/policier.jpg"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_nuit.png')
        },
        {
            "nb": 63,
            "noob": true,
            "text": "Vous êtes nuls. Quelle tristesse !",
            "background": require('../assets/pauvre_nuit.png')
        },

        // No

        {
            "nb": 64,
            "name": "Henry",
            "text": "Je suis désolé, mais j'ai autre chose à faire le soir, donc je serai indisponible.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 65,
            "name": "Jean-Claude",
            "text": "Dommage, je ne pensais pas que tu refuserais. Pas grave, je vais demander à quelqu'un d'autre. Dit moi si tu changes d'avis.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 66,
            "name": "Henry",
            "text": "Compris, au revoir",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 67,
            "rip": true,
            "text": "Vous êtes fénéants. Vous avez fini le jeu en étant pauvre. Dommage !",
            "background": require('../assets/pauvre_nuit.png')
        },

        ////////////////////////////////// Illegal choice //////////////////////////////////

        {
            "nb": 68,
            "name": "Henry",
            "text": "Je vais prendre celle du illégal.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 69,
            "name": "Jean-Claude",
            "text": "Très bien, tu saura les modalités de ce travail dans les prochains jours. Tu peux y aller maintenant.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 70,
            "name": "Henry",
            "text": "Au revoir.",
            "image_right": require("../assets/chef_de_chantier.png"),
            "image_left": require("../assets/ouvrier.png"),
            "background": require('../assets/pauvre_jour.png')
        },
        {
            "nb": 71,
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
        if (id === 0) {
            if (i < textDialog.length - 1) {
                setI(textDialog[i].response[id].jump);
                setDialog(textDialog[i].text);
                setName(textDialog[i].name);
                setPerson1(textDialog[i].image_left);
                setPerson2(textDialog[i].image_right);
                setBackground(textDialog[i].background);
            }
        }
        if (id === 1) {
            if (i < textDialog.length - 1) {
                setI(textDialog[i].response[id].jump);
                setDialog(textDialog[i].text);
                setName(textDialog[i].name);
                setPerson1(textDialog[i].image_left);
                setPerson2(textDialog[i].image_right);
                setBackground(textDialog[i].background);
            }
        }
        if (id === 2) {
            if (i < textDialog.length - 1) {
                setI(textDialog[i].response[id].jump);
                setDialog(textDialog[i].text);
                setName(textDialog[i].name);
                setPerson1(textDialog[i].image_left);
                setPerson2(textDialog[i].image_right);
                setBackground(textDialog[i].background);
            }
        }
        if (id === 3) {
            if (i < textDialog.length - 1) {
                setI(i + 1);
                setDialog(textDialog[i].text);
                setName(textDialog[i].name);
                setPerson1(textDialog[i].image_left);
                setPerson2(textDialog[i].image_right);
                setBackground(textDialog[i].background);
            }
        }
    }

    React.useEffect(() => {
        if (i < textDialog.length - 1) {
            setDialog(textDialog[i].text);
            setName(textDialog[i].name);
            setPerson1(textDialog[i].image_left);
            setPerson2(textDialog[i].image_right);
            setBackground(textDialog[i].background);
        }
    }, [i]);

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
                textDialog[i].dead || textDialog[i].win || textDialog[i].poor || textDialog[i].noob || textDialog[i].rip ?
                    null
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
                                <button onClick={() => handleResponseChoosed(3)}>
                                    <span>
                                        Suivant
                                    </span>
                                </button>
                        }
                    </div>
            }
            {
                textDialog[i].dead ?
                    <div className="Game-condition-dead">
                        VOUS ÊTES MORT !
                    </div>
                    :
                    null
            }
            {
                textDialog[i].win ?
                    <div className="Game-condition-win">
                        VOUS AVEZ GAGNÉ !
                    </div>
                    :
                    null
            }
            {
                textDialog[i].poor ?
                    <div className="Game-condition-dead">
                        VOUS ÊTES PAUVRE
                    </div>
                    :
                    null
            }
            {
                textDialog[i].noob ?
                    <div className="Game-condition-dead">
                        VOUS ÊTES UN NOOB
                    </div>
                    :
                    null
            }
            {
                textDialog[i].rip ?
                    <div className="Game-condition-dead">
                        VOUS ÊTES TROP HONNÊTE
                    </div>
                    :
                    null
            }
        </div>
    );
}


export default Game;