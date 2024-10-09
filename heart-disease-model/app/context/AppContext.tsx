'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
  stage: number;
  setStage: (stage: number) => void;
  description: string;
  setDescription: (description: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [stage, setStage] = useState(1);
  const [description, setDescription] = useState('');

  return (
    <AppContext.Provider value={{ stage, setStage, description, setDescription }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};