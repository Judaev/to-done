import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { Task, taskAtom } from './store/task/taskAtom'
import { taskListAtom } from './store/taskList/taskListAtom'

function App() {
  const [taskList, setTaskList] = useRecoilState(taskListAtom)
  const [task, setTask] = useRecoilState(taskAtom)

  const createTask = () => {
    setTaskList([...taskList, task])
    setTask({ name: '', id: Date.now(), isDone: false, comment: '' })
  }

  const renderTasks = useCallback((item: Task) => {
    return (
      <TaskItem
        key={item.id}
        name={item.name}
        id={item.id}
        isDone={item.isDone}
        comment={item.comment}
      />
    )
  }, [])

  return (
    <div
      style={{
        width: 800,
        height: 500,
        margin: '0 auto',
        marginTop: 200,
      }}
    >
      <div style={{ margin: '0 auto', marginTop: 20 }}>
        <input
          value={task?.name}
          id="input"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          placeholder="Что будем делать?"
        />
        <button id="button" type="button" onClick={createTask}>
          Создать задачу
        </button>
      </div>

      <div>{taskList.map(renderTasks)}</div>
    </div>
  )
}

function TaskItem({ name, id, isDone, comment }: Task) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <input type="radio" id="radioButton" checked={isDone} />
      <div>{` ${name} `}</div>
      <div>{comment}</div>
    </div>
  )
}

export default App
