import React, { useState, useEffect } from "react";
import Persona from "./Persona";

const Personas = ({setPersonaSeleccionada}) => {
  const [personas, setPersonas] = useState([]);

  const getPersonas = async () => {
    let response = await fetch("https://reqres.in/api/users");
    let json = await response.json();

    setPersonas(json.data);
  };

  useEffect(() => {
    getPersonas();
  }, []);

  return (
    <div className="col-md-8">
      <div className="row">
        {personas.map((objPersona) => {
          return (
            <Persona 
            objPersona={objPersona} 
            key={objPersona.id} 
            setPersonaSeleccionada={setPersonaSeleccionada} />
          );
        })}
      </div>
    </div>
  );
};

export default Personas;
