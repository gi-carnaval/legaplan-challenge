import { useContext, useState } from "react";
import { Button } from "../ui/button/button";
import { DialogClose, DialogTitle } from "@components/ui/dialog";
import "./styles.scss"
import { TasksContext } from "@context/TasksContext";
import { DialogContext } from "@context/DialogContext";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

const createTaskForm = z.object({
  taskTitle: z.string().min(3, 'Insira no mínimo 3 caracteres para salvar a tarefa'),
})

type CreateTaskForm = z.infer<typeof createTaskForm>

export function NewTask() {

  const { tasks, setTasks, idTaskList, setIdTaskList } = useContext(TasksContext)
  const { setIsDialogOpen } = useContext(DialogContext)

  const [newTask, setNewTask] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CreateTaskForm>({
    resolver: zodResolver(createTaskForm),
  })

  const handleAddTask = () => {
    if (typeof window !== 'undefined') {
      const nextIdTask = idTaskList + 1
      const newTaskObj = { id: nextIdTask, title: newTask, completed: false }

      setIdTaskList(nextIdTask)
      localStorage.setItem('lastTaskId', JSON.stringify(nextIdTask));

      const updatedTasks = [...tasks, newTaskObj];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));

      setNewTask('');
      setIsDialogOpen(false)
      reset()
    }
  };

  return (
    <div className="newTaskForm">
      <DialogTitle>Nova Tarefa</DialogTitle>
      <form onSubmit={handleSubmit(handleAddTask)}>
        <div className="newTaskField">
          <label className="taskTitle" htmlFor="taskTitle">Título</label>
          <input {...register('taskTitle')} className="inputTaskName" type="text" placeholder="Digite" onChange={(e) => setNewTask(e.target.value)} />
          {errors.taskTitle && <span className="inputError">*{errors.taskTitle.message}</span>}
        </div>
        <div className="newTaskButtons">
          <DialogClose asChild>
            <Button buttonStyle="seconday">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
    </div>
  )
}