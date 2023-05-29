import React, { useState } from "react";

function Card({handleDelete, task, prioridades, estados, handleEditValue}) {
  const [edit, setEdit] = useState(false)
  const [prioridad, setPrioridad] = useState(task.prioridad)
  const [estado, setEstado] = useState(task.estado)
  const saveEdit = () => {
    handleEditValue({...task, prioridad, estado})
    setEdit(!edit)
  }
  return (
	<div className="card">
      <button className="close" onClick={() => handleDelete(task.id)}></button>
      <p className="title"><span>{task.titulo}</span></p>
      <div className="content">
        <p>Descripcion:</p>
        <p className="description"><span>{task.descripcion}</span></p>
      </div>
      {!edit ? <div className="status">
        <p>Prioridad: <span>{task.prioridad}</span></p>
        <p>Estado: <span>{task.estado}</span></p>
        <button type="button" onClick={() => setEdit(!edit)}>Editar <i className="fa fa-edit"></i></button>
      </div> : 
      <div className="status">
            <select
            name="prioridad"
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
            required
        >
            {prioridades.map((pri, ind) =><option key={ind} value={pri}>{pri}</option> )}
        </select>
        <select
            name="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
        >
            {estados.map((est, i) =><option key={i} value={est}>{est}</option> )}
        </select>
        <button type="button" onClick={() => saveEdit()}>Guardar <i className="fa fa-save"></i></button>
      </div>
      }
	</div>
  );
}

export default Card;