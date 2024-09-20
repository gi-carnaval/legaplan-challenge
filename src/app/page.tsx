'use client'

import { useContext, useEffect } from "react";
import { TaskDialog } from "@components/taskDialog/taskDialog";
import { Button } from "@ui/button/button";
import { Dialog, DialogTrigger } from "@ui/dialog";
import { TasksSection } from "@components/tasksSection/tasksSection";
import { DialogContext } from "@context/DialogContext";
import { TasksContext } from "@context/TasksContext";
import { Header } from "@components/header";

export default function Home() {

  const { setDialogContent, isDialogOpen, setIsDialogOpen } = useContext(DialogContext)
  const { setTasks } = useContext(TasksContext)

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Header />
        <main>
          <TasksSection />
          <DialogTrigger asChild>
            <Button onClick={() => setDialogContent('newTask')}>
              Adicionar nova tarefa
            </Button>
          </DialogTrigger>
        </main>
        <TaskDialog />
      </Dialog>
    </>
  );
}
