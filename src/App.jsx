import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "./Components/Header";
import data from "./data.json";

function App() {
  const [tareas, setTareas] = useState(data);

  const onBorrarTarea = (id) => {
    console.log(id);
    let pregunta = prompt("deseas borrar la tarea? si/no");
    if (pregunta == "si") {
      setTareas([...tareas].filter((tarea) => tarea.id !== id));
    } else if (pregunta == "no") {
      alert("buena eleccion");
    } else {
      alert("ingresa por favor un valor valido");
    }
  };

  const agregarTarea = (nuevaTarea) => {
    console.log("se agrego ", nuevaTarea);
    let newTarea = {
      id: tareas.length + 1,
      tarea: nuevaTarea,
      completado: false,
    };
    setTareas([...tareas, newTarea]);
  };

  const completarTarea = (tarea) => {
    console.log(tarea);
    setTareas(
      tareas.map((item) => {
        if (item.id === tarea.id) {
          return { ...item, completado: !item.completado };
        }
        
        return item;
      })
    );
  };

  const onBorrarTareas = () => {
    setTareas([]);
  };
  return (
    <ChakraProvider>
      <div className="App">
        <Header
          tareas={tareas}
          onBorrarTarea={onBorrarTarea}
          agregarTarea={agregarTarea}
          completarTarea={completarTarea}
          onBorrarTareas={onBorrarTareas}
        />
      </div>
    </ChakraProvider>
  );
}

export default App;
