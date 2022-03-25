import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { taskListAtom } from '../../store/taskList/taskListAtom'
import UICheckbox from '../UICheckbox/UICheckbox'
import { TaskItemContainer, TaskItemTitle } from './UITaskItem.styled'

interface UITaskItemProps {
  id: number
  title: string
}

function UITaskItem({ id, title }: UITaskItemProps) {
  const [taskList, setTaskList] = useRecoilState(taskListAtom)
  const [isDone, setIsDone] = useState(false)

  const taskHandler = () => {
    taskList.find((item) => {
      if (item.id === id) {
      }
    })
    setIsDone(!isDone)
  }

  return (
    <TaskItemContainer>
      <UICheckbox isDone={isDone} onClick={taskHandler} />
      <TaskItemTitle isDone={isDone}>{title}</TaskItemTitle>
    </TaskItemContainer>
  )
}

export default UITaskItem
