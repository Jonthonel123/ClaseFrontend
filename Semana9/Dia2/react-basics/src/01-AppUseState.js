import React, { useState } from "react";
import Header from "./componentes/Header";


const App = () => {
    const titulo = "REACT. CSSS";
    const [contador, setContador]=useState(0);

    const restar =(e)=>{
       setContador(contador-1)
    }
    const sumar =(e)=>{
        console.log(contador);
        setContador(contador+1)
        
    }
    console.log("Dubujando APP");
  return (
    <>
      <Header></Header>
      <main>
        <h1> {titulo} </h1>
        <button onClick={restar}>-1</button>
        <span>{contador}</span>
        <button onClick={sumar}>+1</button>
      </main>
      
    </>
  );
};

export default App;
