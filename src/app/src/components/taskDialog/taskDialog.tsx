'use client'

import { useContext } from "react";
import { DialogContext } from "@context/DialogContext";
import { NewTask } from "@components/newTask/";
import { DialogContent, DialogDescription } from "@ui/dialog";
import { DeleteTask } from "@components/deleteTask/";

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