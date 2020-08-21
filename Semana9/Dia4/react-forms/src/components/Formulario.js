import React, { useState } from "react";

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    pais: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { apellido, nombre, pais } = form;
    if (nombre !== "" && apellido !== "" && pais !== "") {
      setError(false);
      setForm({
        nombre: "",
        apellido: "",
        pais: "",
      });
      console.log("Bien causa formulario corrrecto");
      return;
    }
    setError(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error === true ? (
        <div className="alert alert-danger">
          <strong>Ey</strong> Todos los cambpos deben se llenados
        </div>
      ) : null}

      <div className="form-group">
        <label htmlFor="">Nombre :</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          onChange={handleChange}
          value={form.nombre}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Apellido :</label>
        <input
          type="text"
          className="form-control"
          name="apellido"
          onChange={handleChange}
          value={form.apellido}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Pais de residencia :</label>
        <select
          className="form-control"
          name="pais"
          onChange={handleChange}
          value={form.pais}
        >
          <option value="">--Seleccione Pais--</option>
          <option value="01">Peru</option>
          <option value="01">Bolivia</option>
          <option value="01">Uruguay</option>
        </select>
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit">
          Registrarme
        </button>
      </div>
    </form>
  );
};

export default Formulario;
