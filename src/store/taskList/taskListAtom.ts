import { atom } from 'recoil'
import { Task } from '../task/taskAtom'

export const taskListAtom = atom<Task[]>({
  key: 'taskListAtom',
  default: [],
})
