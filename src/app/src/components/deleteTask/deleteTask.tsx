import { Button } from "../ui/button/button";
import { DialogClose, DialogTitle } from "@ui/dialog";
import "./styles.scss"
import { useContext } from "react";
import { TasksContext } from "@context/TasksContext";
import { DialogContext } from "@app/src/context/DialogContext";

export function DeleteTask() {

  const { taskId, tasks, setTasks } = useContext(TasksContext)
  const { setIsDialogOpen } = useContext(DialogContext)

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setIsDialogOpen(false)
  };

  return (
    <div className="deleteTaskForm">
      <DialogTitle>Deletar tarefa</DialogTitle>
      <p>Tem certeza que você deseja deletar essa tarefa?</p>
      <div className="deleteTaskButtons">
        <DialogClose asChild>
          <Button buttonStyle="seconday">Cancelar</Button>
        </DialogClose>
        <Button buttonStyle="delete" onClick={() => taskId && handleDeleteTask(taskId)}>Deletar</Button>
      </div>
    </div >
  )
}