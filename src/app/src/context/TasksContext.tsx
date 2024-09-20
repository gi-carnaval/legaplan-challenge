'use client'

import { createContext, useState } from 'react'
import { TasksProps } from '@components/tasksSection'


interface TasksContextType {
  tasks: TasksProps[]
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>
  taskId: number | null
  setTaskId: React.Dispatch<React.SetStateAction<number | null>>
  idTaskList: number
  setIdTaskList: React.Dispatch<React.SetStateAction<number>>
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  setTasks: () => { },
  taskId: null,
  setTaskId: () => { },
  idTaskList: 0,
  setIdTaskList: () => { }
})

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [taskId, setTaskId] = useState<number | null>(null)
  const [idTaskList, setIdTaskList] = useState<number>(0)

  return (
    <TasksContext.Provider value={{ tasks, setTasks, taskId, setTaskId, idTaskList, setIdTaskList }}>
      {children}
    </TasksContext.Provider>
  )
}
