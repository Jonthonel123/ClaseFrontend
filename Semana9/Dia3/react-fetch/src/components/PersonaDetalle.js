import React from "react";
import Persona from "./Persona"

const PersonaDetalle = ({ personaSeleccionada }) => {
  console.log(personaSeleccionada);

  return personaSeleccionada ?
   (<Persona objPersona={personaSeleccionada} />) : 
   (<div className="col-md-4">Selecciona a un causa</div>);
};

export default PersonaDetalle;
