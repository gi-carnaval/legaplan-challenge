import { TaskItem } from "../taskItem/taskItem";
import { TasksProps } from "@components/tasksSection";

interface NotCompletedTasksListProps {
  tasks: TasksProps[];
  onToggleComplete: (id: number) => void;
  onOpenDeleteDialog: (id: number) => void;
  title: string
}

export function TasksList({ tasks, onToggleComplete, onOpenDeleteDialog, title }: NotCompletedTasksListProps) {
  return (
    <>
      <h2 className="tasksSectionTitle">{title}</h2>
      <ul className="tasks">
        {
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onOpenDeleteDialog={onOpenDeleteDialog}
            />
          ))
        }
      </ul>
    </>
  )
}