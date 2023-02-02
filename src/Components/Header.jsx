import React, { useState } from 'react'
import {TaskList} from "./TaskList.jsx"

export const Header = (props) => {
  const {tareas, onBorrarTarea,agregarTarea} = props
  const [nuevaTarea, setNuevaTarea] = useState("");
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(nuevaTarea !== ""){
      agregarTarea(nuevaTarea)
    }
    setNuevaTarea("");
    }
  
  return (
    <div>
    <div>Todo App</div>
    <form onSubmit={onHandleSubmit}>
    <input  type="text" value={nuevaTarea} onChange={(e) =>{setNuevaTarea(e.target.value)}}/>
    <button onClick={onHandleSubmit}>Agregar tarea</button>
    <TaskList tareas={tareas} onBorrarTarea={onBorrarTarea}/>
    </form>
    </div>
  )
}
