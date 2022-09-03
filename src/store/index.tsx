import { createContext } from "react"

export type GlobalContent = {
  data: string[]
  setData: (c: string) => void
}

export const GlobalContext = createContext<GlobalContent>(null as any)
