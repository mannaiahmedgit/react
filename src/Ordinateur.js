import React from 'react';

import './Odrinateur.css';

const Ordinateur = (props) => {
   
         return (
            
            <div class="box 3-col" id={props.id}  >
                <img alt={props.marque}  src={props.image} width="200" height="200" />
                <div class="content">
                    <h2>{props.marque}</h2>
                    <p>{props.couleur}</p>
                    <p>{props.prix} DT</p>
                </div>
            </div>
        );
}



export default Ordinateur;