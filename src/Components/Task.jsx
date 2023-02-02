import React from 'react'

export const Task = (props) => {
    const {tarea, onBorrarTarea} = props
    
  return (
    <div>
        {tarea.tarea}
        <button>Actualizar</button>
        <button onClick={() =>{onBorrarTarea(tarea.id)}}>Borrar</button>
    </div>
    
  )
}
