import React, { useState } from 'react'
import Header from './components/Header'
import Personas from './components/Personas'
import PersonaDetalle from './components/PersonaDetalle'

function App() {
  
  const [personaSeleccionada,setPersonaSeleccionada]=useState(null)

  return (
    <>
      <Header></Header>
      <main className="container-fluid">
          <div className="row">
                <Personas setPersonaSeleccionada={setPersonaSeleccionada} />
                <PersonaDetalle personaSeleccionada={personaSeleccionada} />
          </div>
      </main>
    </>
  )
}

export default App

