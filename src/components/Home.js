import React from 'react';
import "../styles/Home.css";

function HomePage() {
  return (
    <div className="Home">
      <h1>
        Introduction
      </h1>
      <div className="Home-description">
        <p>
          Henry, un jeune homme de 29 ans, vit dans un monde où le temps à remplacé l'argent. Ce jeune homme travaille dans une usine pour survivre et gagner une certaine somme le temps de vivre une journée.
        </p>
        <p>
          Il y a les riches et les pauvres. Les riches vivent plus longtemps et les pauvres peuvent mourir à tout moment. Lors d'un soir banal, la mère d'Henry remarqua que les prix des billets de bus ont doublé. Par manque de temps, elle ne peut payer son ticket et est forcée de parcourir tout le trajet à pied. Comme vous l'avez pu voir dans le trailer, Henry sera obligé de faire des choix dont <strong>VOUS</strong> choisirez.
        </p>
        <i>
          A vous le succès !
        </i>
      </div>
    </div>
  );
}

export default HomePage;