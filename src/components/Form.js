import React from "react";

const Form = ({ handleSubmit, handleChangeValue, values, prioridades, estados }) => {
  return (
    <form 
        className="todo-form"
        onSubmit={handleSubmit}
    >
        <div className="form-flex">
        <input
            type="text"
            name="titulo"
            placeholder="Titulo"
            value={values.titulo}
            onChange={(e) => handleChangeValue('titulo',e.target.value)}
            required
        />
        <select
            name="prioridad"
            value={values.prioridad}
            onChange={(e) => handleChangeValue("prioridad", e.target.value)}
            required
        >
            <option value={""}>Prioridad</option>
            {prioridades.map((prioridad, index) =><option key={index} value={prioridad}>{prioridad}</option> )}
        </select>
        <select
            name="estado"
            value={values.estado}
            onChange={(e) => handleChangeValue("estado", e.target.value)}
            required
        >
            <option value={""}>Estado</option>
            {estados.map((estado, index) =><option key={index} value={estado}>{estado}</option> )}
        </select>
        </div>
        <textarea
        placeholder="Descripción"
        value={values.descripcion}
        onChange={(e) => handleChangeValue("descripcion", e.target.value)}
        rows="5"
        cols="20"
        required
        />
        <button type="submit">Crear tarea</button>
    </form>
  );
}

export default Form;