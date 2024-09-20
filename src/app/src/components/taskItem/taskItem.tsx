import Image from "next/image";
import trashIcon from '@assets/trash.svg'
import './styles.scss'
import { TasksProps } from "@components/tasksSection";
import { useContext } from "react";
import { TasksContext } from "@app/src/context/TasksContext";
import { DialogContext } from "@app/src/context/DialogContext";

interface TaskItemProps {
  task: TasksProps
  onToggleComplete: (id: number) => void;
  onOpenDeleteDialog: (id: number) => void
}

export function TaskItem({ task, onToggleComplete, onOpenDeleteDialog }: TaskItemProps) {

  const { setTaskId } = useContext(TasksContext)
  const { setDialogContent, setIsDialogOpen } = useContext(DialogContext)

  const handleDeleteTask = (taskId: number) => {
    setTaskId(taskId)
    setDialogContent('deleteTask')
    setIsDialogOpen(true)
  }

  return (
    <li className="task">
      <label className="checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <div className="checkbox__checkmark"></div>
        <span className={`taskTitle ${task.completed ? 'completedTask' : ''}`}>{task.title}</span>
      </label>
      <button
        className="excludeButton"
        aria-label={`Excluir ${task.title}`}
        onClick={() => handleDeleteTask(task.id)}
      >
        <Image src={trashIcon} alt="Excluir" />
      </button>
    </li>
  )
}