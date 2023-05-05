import { useState , useContext } from "react";
//importamos el contexto que requiere el componente
import { TareaContexto } from "../context/tareaContext";

function TaskForm() {
  //en el estado se guarda  lo capturado en el formulario con el nombre de la  variable titulo
  const [titulo, setTitulo] = useState("");
  const [detalleTarea, setDetalleTarea] = useState("");

  //del contexto se trae la funcion
  const {crearTarea}= useContext(TareaContexto);
  let p = false;

  function validar(){
    console.log(titulo, detalleTarea);
    if(titulo.length == 0 && detalleTarea.length == 0){
      console.log("ningun campo puede estar vacio");
    }else{
      p=true;
    }
  }

  //esta funcion se ejecuta cuando el evento onSumbit es disparado al enviar el form
  //al ejecutarse llamará a crearTarea y le pasara lo capturado en el form osea lo guardado en titulo
  const manejoDelFormulario = (evento) => {
    evento.preventDefault();
    //verificamos si se estan capturando los valores
    //console.log(titulo, detalleTarea);
    crearTarea({
      titulo: titulo,
      descripcion: detalleTarea,
    });

    //esto vacia los (state) del campo del imput y el text area despues de añadir una tarea
    setTitulo("");
    setDetalleTarea("");

    
  };
  return (
    <div className="max-w-md mx-auto">
    <form onSubmit={manejoDelFormulario} className="bg-cyan-500 p-5 rounded-md mb-6">
      <input
        type="text"
        placeholder="titulo de la tarea"
        className="bg-blue-800 p-2 w-full mb-2 rounded-md text-white"
        //cuando se dispare el vento onChange llama a setTitulo y le pasa por parametro
        //lo capturado por el campo de texto éste le pasa a su variable correspondiente "titulo" el
        //valor que obtuvo por parametro.
        onChange={(evento) => {
          setTitulo(evento.target.value);
        }}
        //pone en uso el estate vacio
        value={titulo}
        //al iniciar la app el cursor ya estara sobre el campo del input
        autoFocus
      />
      <textarea
        className="bg-blue-800 p-3 w-full mb-2 rounded-md text-white"
        placeholder="detalles de la tarea"
        onChange={(Objevento) => setDetalleTarea(Objevento.target.value)}
        //pone en uso el state vacio
        value={detalleTarea}
      />
      <button className="bg-green-500 hover:bg-green-700 rounded-md p-2 text-yellow-50" 
      onClick={(e)=>{validar(e)}}>Guardar</button>
    </form>
    </div>
  );
}
export default TaskForm;
