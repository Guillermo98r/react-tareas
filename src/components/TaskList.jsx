import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas ahora
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {/* Por cada tarea se crea un componente Taskcard con su objeto del arreglo al props task*/}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
