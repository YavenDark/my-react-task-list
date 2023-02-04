import data from "./data.json";

const [tareas, setTareas] = useState(data);

export const onBorrarTarea = (id) => {
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

export const agregarTarea = (nuevaTarea) => {
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

export const completarTarea = (tarea) => {
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

export const onBorrarTareas = () => {
  let tareasGuardadas = [...tareas];
  tareasGuardadas = [];
  console.log(tareasGuardadas);
  setTareas(tareasGuardadas);
  localStorage.getItem("tareas", JSON.stringify(tareasGuardadas));
};
