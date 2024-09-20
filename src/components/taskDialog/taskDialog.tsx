'use client'

import { useContext } from "react";
import { NewTask } from "@components/newTask";
import { DialogContent, DialogDescription } from "@components/ui/dialog";
import { DeleteTask } from "@components/deleteTask";
import { DialogContext } from "@context/DialogContext";

export function TaskDialog() {
  const { dialogContent } = useContext(DialogContext)

  return (
    <DialogContent>
      <DialogDescription />
      {
        dialogContent === 'newTask' ? (
          <NewTask />
        ) : (
          <DeleteTask />
        )
      }
    </DialogContent>
  )
}