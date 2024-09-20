'use client'

import { createContext, useState } from 'react'

interface DialogContextType {
  isDialogOpen: boolean
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
  setDialogContent: React.Dispatch<React.SetStateAction<string>>
  dialogContent: string
}

export const DialogContext = createContext<DialogContextType>({
  isDialogOpen: false,
  setIsDialogOpen: () => { },
  dialogContent: '',
  setDialogContent: () => { },
})

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState('')


  return (
    <DialogContext.Provider value={{ isDialogOpen, setIsDialogOpen, dialogContent, setDialogContent }}>
      {children}
    </DialogContext.Provider>
  )
}
