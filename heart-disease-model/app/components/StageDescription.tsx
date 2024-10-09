import { useAppContext } from '@/context/AppContext'

interface AppContextType {
  description: string;
}

export default function StageDescription() {
  const { description } = useAppContext() as AppContextType

  return (
    <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded">
      <p>{description}</p>
    </div>
  )
}