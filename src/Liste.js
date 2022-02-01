import React from 'react';
import Ordinateur from './Ordinateur';
import './Odrinateur.css';

const Liste = ({ Ordinateurs }) => {
  return (
    <div class='container col-min-3'>
      {
        Ordinateurs.map(Ordinateurs => {
          return (
            <Ordinateur
              key={Ordinateurs.id}
              id={Ordinateurs.id}
              marque={Ordinateurs.marque}
              couleur={Ordinateurs.couleur}
              prix={Ordinateurs.prix}
              image={Ordinateurs.image}
              />
          );
        })
      }
    </div>
  );
}

export default Liste;