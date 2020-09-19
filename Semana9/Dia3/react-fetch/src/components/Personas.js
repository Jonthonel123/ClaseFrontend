import React, { useState, useEffect } from "react";
import Persona from "./Persona";
import { getPersonas } from "../services/services";

const Personas = ({ setPersonaSeleccionada }) => {
  const [personas, setPersonas] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages,setTotalPages]=useState(0)

  useEffect(() => {
    getPersonas(page).then((rpta) => {
      setPersonas(rpta.data);
      setTotalPages(rpta.total_pages)
    });
  }, [page]);

  const anterior = () => {
    setPage(page - 1);
  };
  const siguiente = () => {
    setPage(page + 1);
  
  };

  return (
    <div className="col-md-8">
      <div className="row justify-content-center mb-3">
        <div className="col-md-2">
          <button className="btn btn-danger btn-block" onClick={anterior}
          disabled={page===1}>
            Anterior
          </button>
        </div>
        <div className="col-md-2">
          <button className="btn btn-danger btn-block" onClick={siguiente}
           disabled={totalPages===page}>
            Siguiente
          </button>
        </div>
      </div>
      <div className="row">
        {personas.map((objPersona) => {
          return (
            <Persona
              objPersona={objPersona}
              key={objPersona.id}
              setPersonaSeleccionada={setPersonaSeleccionada}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Personas;
