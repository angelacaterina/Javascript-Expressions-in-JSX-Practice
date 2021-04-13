//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const fname = "Angela Caterina";
const lname = "Gallo";
const currentYear = new Date();
const year = currentYear.getFullYear();
ReactDOM.render(
  <div>
    <p>
      Created by {fname} {lname}
    </p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

/** Date (oggetti data)
  - costruttore new Date(): crea un nuovo oggetto data con la data e l'ora correnti 
  - metodo getFullYear():	restituisce l'anno di una data come numero di quattro cifre
 * {new Date().getFullYear()}
 */
