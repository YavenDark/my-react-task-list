import React from 'react'
import { Task } from './Task'

export const TaskList = (props) => {
  const {tareas, onBorrarTarea} = props
  return (
    <div>
      {
        tareas.map((tarea,index) => (
          <Task key={index} tarea={tarea} onBorrarTarea={onBorrarTarea}/> 
        ))
           
      }
    </div>
  )
}
