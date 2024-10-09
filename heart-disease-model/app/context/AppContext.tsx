'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

const AppContext = createContext({
  stage: 0,
  setStage: (stage: number) => {},
  description: '',
  setDescription: (description: string) => {}
})

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [stage, setStage] = useState(0)
  const [description, setDescription] = useState('')

  // Example usage of setStage
  React.useEffect(() => {
    setStage(1); // Set stage to 1 as an example
  }, []);

  return (
    <AppContext.Provider value={{ stage, setStage, description, setDescription }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}