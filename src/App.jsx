import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import data from "./data.json";

function App() {
  const [tareas, setTareas] = useState(data);

  const onBorrarTarea = (id) => {
    console.log(id);
    let tareasGuardadas = [...tareas];
    let pregunta = prompt("deseas borrar la tarea? si/no");
    if (pregunta == "si") {
      tareasGuardadas = [...tareas].filter((tarea) => tarea.id !== id);
    } else if (pregunta == "no") {
      alert("buena eleccion");
    } else {
      alert("ingresa por favor un valor valido");
    }
    setTareas(tareasGuardadas);
    localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
  };

  const agregarTarea = (nuevaTarea) => {
    console.log("se agrego ", nuevaTarea);
    let tareasGuardadas = [...tareas];
    let newTarea = {
      id: tareas.length + 1,
      tarea: nuevaTarea,
      completado: false,
    };
    tareasGuardadas = [...tareas, newTarea];
    setTareas(tareasGuardadas);
    localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
  };

  const completarTarea = (tarea) => {
    let tareasGuardadas = [...tareas];
    tareasGuardadas = tareasGuardadas.map((item) => {
      if (item.id === tarea.id) {
        return { ...item, completado: !item.completado };
      }
      return item;
    });
    setTareas(tareasGuardadas);
    localStorage.getItem("tareas", JSON.stringify(tareasGuardadas));
  };

  const onBorrarTareas = () => {
    let tareasGuardadas = [...tareas];
    tareasGuardadas = [];
    console.log(tareasGuardadas);
    setTareas(tareasGuardadas);
    localStorage.getItem("tareas", JSON.stringify(tareasGuardadas));
  };

  const onEditarTarea = (id) => {
    let tareasGuardadas = [...tareas];
    let tareaEdit = tareasGuardadas.find((tarea) => tarea.id === id);
    let newTarea = prompt(
      "Ingrese la nueva descripción de la tarea",
      tareaEdit.tarea
    );
    tareasGuardadas = tareasGuardadas.map((item) => {
      if (item.id === id) {
        return { ...item, tarea: newTarea };
      }
      return item;
    });
    setTareas(tareasGuardadas);
    localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("tareas");
    const tareaDataJson = JSON.parse(localStorageData);
    setTareas(tareaDataJson);
  }, []);

  return (
    <ChakraProvider>
      <div className="App">
        <Header
          tareas={tareas}
          onBorrarTarea={onBorrarTarea}
          agregarTarea={agregarTarea}
          completarTarea={completarTarea}
          onBorrarTareas={onBorrarTareas}
          onEditarTarea={onEditarTarea}
        />
      </div>
    </ChakraProvider>
  );
}

export default App;
