import { createContext } from 'react'

export type ObserverFormContextType = {
  isBelowForm: boolean
  setIsBelowForm: (isBelowForm: boolean) => void
}

export const ObserverFormContext =
  createContext<ObserverFormContextType>({
    isBelowForm: false,
    setIsBelowForm: () => {}
  })
