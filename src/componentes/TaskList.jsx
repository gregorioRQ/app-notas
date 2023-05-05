
import VisualTarea from "./visualTarea";
import { useContext } from "react";
import { TareaContexto } from "../context/tareaContext";


/* funcion que recorre el array de objetos  */
function TaskList(){

  const {tareas} = useContext(TareaContexto)

    if (tareas.length === 0) {
      return <h1 className="text-4xl font-bold text-center text-white">No hay tareas aun</h1>;
    };
    return (
      <div className="grid grid-cols-4 gap-2">
       {/* por cada objeto recorrido generara una interfaz visual que mostrara los datos pasados por parametro al
          componente  */}
        {tareas.map((datosTarea) => (
          //cada que se genera un objeto le asignamos un id para evitar errores en el uso de ids obligatorios por nodo y tambien le pasamos los datos esto no lo hacemos desde el contexto como la funcion para eliminar
          //una tarea porque el map necesita recorrer el arreglo de tareas.
        
          <VisualTarea key={datosTarea.id} datosTarea={datosTarea}/>
        ))}
      </div>
      ); 
   
}

export default TaskList;