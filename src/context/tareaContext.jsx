//el contexto sirve para que los componentes que requieran de datos y funciones del estado no tengan
//que ir de componente en componenete hasta alcanzar al estado, osea el contexto almacena un dato que los demas
//componentes pueden usar es como un componente padre.
import { createContext, useState , useEffect} from "react";
import { tareas as data } from "../dbTareas/tasks";

//la funcion retorna un objeto este representa el nombre del contexto
export const TareaContexto = createContext();

//la funcion establece que TareaContexto sera el contexto y que los demas componentes seran sus hijos
export function TareaContextoProvider(props) {

  //estado de las tareas
  const [tareas, setTasks] = useState([]);

  function crearTarea(dataTarea) {
    setTasks([
      ...tareas,
      {
        id: tareas.length,
        titulo: dataTarea.titulo,
        descripcion: dataTarea.descripcion,
      },
    ]);
  }

  function eliminarTarea(tareaId) {
    setTasks(tareas.filter((task) => task.id !== tareaId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TareaContexto.Provider
      value={{
        tareas: tareas,
        crearTarea: crearTarea,
        eliminarTarea: eliminarTarea,
      }}
    >
      {props.children}
    </TareaContexto.Provider>
  );
}
