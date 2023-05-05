import React from "react";
import { useContext } from "react";
import { TareaContexto } from "../context/tareaContext";

//este componente fabrica una interfaz visual con los datos que recibe
//no se puede acceder a datosTarea a traves del contexto porque TaskList lo esta mapeando
function VisualTarea({ datosTarea }) {
  const { eliminarTarea } = useContext(TareaContexto);

  return (
    <div className="bg-green-500 text-white  p-5 rounded-md" >
      <h1 className="text-xl font-bold capitalize text-blue-800">{datosTarea.titulo}</h1>
      <p className="text-sm m-3">{datosTarea.descripcion}</p>

      {/*se pone la llamada a la funcion eliminarTarea dentro de una funcion anonima porque de este modo
            se evita que se llame a la funcion eliminar que fue replicada en cada interfaz 
           el parametro dastosTarea.id seria tareaId en eliminarTarea del componente App.jsx
        */}
      <button onClick={() => eliminarTarea(datosTarea.id)} 
        className="bg-orange-600 rounded-sm text-sm p-1 hover:bg-orange-500"
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default VisualTarea;
