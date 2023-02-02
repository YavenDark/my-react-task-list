import { useState } from "react"
import { Header } from "./Components/Header"
import data from "./data.json"

function App() {
  const [tareas, setTareas] = useState(data);

  const onBorrarTarea = (id) =>{
    setTareas([...tareas].filter(tarea => tarea.id!==id))
  }

  const agregarTarea = (nuevaTarea) =>{
    console.log("se agrego la", nuevaTarea)
    let newTarea={id:tareas.length+1, tarea:nuevaTarea}
    setTareas([...tareas, newTarea])
    console.log(tareas)
  }
  return (
    <div className="App">
      <Header tareas={tareas} onBorrarTarea={onBorrarTarea} agregarTarea={agregarTarea}/>  
    </div>
  )
}

export default App
