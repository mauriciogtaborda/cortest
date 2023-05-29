import React from "react";

const Filters = ({ prioridades, estados, filters, handleChangeValue }) => {

  return (
    <div>
        <h3>Filtrar por:</h3>
        <div>
            <select
                name="prioridad"
                value={filters.prioridad}
                onChange={(e) => handleChangeValue("prioridad", e.target.value)}
                required
            >
                <option value={""}>Prioridad</option>
                {prioridades.map((prioridad, index) =><option key={index} value={prioridad}>{prioridad}</option> )}
            </select>
            <select
                name="estado"
                value={filters.estado}
                onChange={(e) => handleChangeValue("estado", e.target.value)}
                required
            >
                <option value={""}>Estado</option>
                {estados.map((estado, index) =><option key={index} value={estado}>{estado}</option> )}
            </select>
        </div>
    </div>
  );
}

export default Filters;