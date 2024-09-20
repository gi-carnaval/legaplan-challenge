'use client'
import "./styles.scss";
import { useContext } from "react";
import { DialogContext } from "@context/DialogContext";
import { TasksContext } from "@context/TasksContext";
import { TasksList } from "@components/tasksList";

export interface TasksProps {
  id: number;
  title: string;
  completed: boolean;
}

export function TasksSection() {
  const { setIsDialogOpen } = useContext(DialogContext)
  const { tasks, setTasks } = useContext(TasksContext)

  if (!tasks) return

  const notCompletedTasks = tasks.filter((task) => task.completed === false)
  const completedTasks = tasks.filter((task) => task.completed === true)

  const handleToggleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleOpenDeleteDialog = () => {
    setIsDialogOpen(true)
  }

  return (
    <section className="tasksSection">
      {
        notCompletedTasks.length > 0 && (
          <TasksList
            tasks={notCompletedTasks}
            onToggleComplete={handleToggleComplete}
            onOpenDeleteDialog={handleOpenDeleteDialog}
            title="Suas tarefas de hoje"
          />
        )
      }
      {
        completedTasks.length > 0 && (
          <TasksList
            tasks={completedTasks}
            onToggleComplete={handleToggleComplete}
            onOpenDeleteDialog={handleOpenDeleteDialog}
            title="Tarefas finalizadas"
          />
        )
      }
    </section>
  )
}