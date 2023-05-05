
import TaskForm from "./componentes/TaskForm";
import TaskList from "./componentes/TaskList";

function Aplicacion(){

  //const [tareas, setTasks] = useState([]);
  //la funcion añadira un nuevo objeto al arreglo de las tareas
  // useEffect(() => {
  //   setTasks(data);
  // }, []);

  //let arr = [1,2,3] 
  //let num = 4;
  //let arr1 = [...arr, num] <> let arr1 = [1,2,3,4];
  //crea una copia del array con todos sus elementos + el que quereamos incluir sin alterar el original

  /* 
    se podria generar el objeto tarea en el archivo taskform pero en ese caso no se podria acceder al array de tareas
    y por causa de eso no se podria poner un id incremental ya que react obliga poner un id por nodo;
    ahora cada que se crea una tarea se le asignara como id la cantidad de tareas hasta ahora
  */
  // function crearTarea(dataTarea){
  //   setTasks([...tareas, {
  //     id: tareas.length,
  //     titulo: dataTarea.titulo,
  //     descripcion: dataTarea.descripcion
  //   }])   
  // }

  //esta funcion ira a taskList y de ahi a taskForm
  //function eliminarTarea(tareaId){
    //comprueba si la funcion recibe el id
    //console.log(tareaId);
    //en el estado se establece como nuevo valor el nuevo array retornado por filter
   // setTasks(tareas.filter(task=>task.id !== tareaId))
  //}

  return(
    <section className="bg-blue-800 h-screen">  
      <div className="container bg-green-900 mx-auto p-5">
        <TaskForm/>
        <TaskList/>
      </div>
      
    </section>
  )
};

export default Aplicacion;