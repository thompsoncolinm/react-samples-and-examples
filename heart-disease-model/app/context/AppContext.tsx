'use client'

import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [stage, setStage] = useState(0)
  const [description, setDescription] = useState('')

  return (
    <AppContext.Provider value={{ stage, setStage, description, setDescription }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}