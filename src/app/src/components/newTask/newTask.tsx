import { useContext, useState } from "react";
import { Button } from "../ui/button/button";
import { DialogClose, DialogTitle } from "@ui/dialog";
import "./styles.scss"
import { TasksContext } from "@app/src/context/TasksContext";
import { DialogContext } from "@app/src/context/DialogContext";

export function NewTask() {

  const { tasks, setTasks, idTaskList, setIdTaskList } = useContext(TasksContext)
  const { setIsDialogOpen } = useContext(DialogContext)

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    const nextIdTask = idTaskList + 1
    setIdTaskList(nextIdTask)
    const updatedTasks = [...tasks, { id: nextIdTask, title: newTask, completed: false }];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setNewTask('');
    setIsDialogOpen(false)
  };

  return (
    <div className="newTaskForm">
      <DialogTitle>Nova Tarefa</DialogTitle>
      <div className="newTaskField">
        <label className="taskTitle" htmlFor="taskTitle">Título</label>
        <input className="inputTaskName" type="text" placeholder="Digite" onChange={(e) => setNewTask(e.target.value)} />
      </div>
      <div className="newTaskButtons">
        <DialogClose asChild>
          <Button buttonStyle="seconday">Cancelar</Button>
        </DialogClose>
        <Button onClick={handleAddTask}>Adicionar</Button>
      </div>
    </div>
  )
}