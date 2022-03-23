import { atom } from 'recoil'

export type Task = {
  name: any
  id: number
  isDone: boolean
  status?: string
  comment: string
  priority?: number
  project?: any
}

export const taskAtom = atom<Task>({
  key: 'taskAtom',
  default: {
    name: '',
    id: Date.now(),
    isDone: false,
    comment: '',
  },
})
