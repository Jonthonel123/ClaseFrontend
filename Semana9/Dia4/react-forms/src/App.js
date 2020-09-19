import React from "react";
import Formulario from "./components/Formulario";
import FormCrearPlato from "./components/FormCrearPlato";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <FormCrearPlato />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
