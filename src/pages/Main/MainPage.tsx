import { useRecoilState } from 'recoil'
import UIButton from '../../components/UIButton/UIButton'
import UITaskItem from '../../components/UITaskItem/UITaskItem'
import { taskAtom } from '../../store/task/taskAtom'
import { taskListAtom } from '../../store/taskList/taskListAtom'

function MainPage() {
  const [taskList, setTaskList] = useRecoilState(taskListAtom)
  const [task, setTask] = useRecoilState(taskAtom)

  const createTask = () => {
    if (task.name !== '') {
      setTaskList([...taskList, task])
      setTask({ name: '', id: Date.now(), isDone: false, comment: '' })
    }
  }

  const inputOnChange = (text: string) => {
    setTask({ ...task, name: text })
  }

  const renderTask = (item: any) => {
    return <UITaskItem key={item.id} id={item.id} title={item.name} />
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 800,
        height: '100vh',
        backgroundColor: '#F5F5F5',
        margin: '0 auto',
        paddingTop: 40,
      }}
    >
      <div style={{ marginLeft: 50, marginTop: 10 }}>
        <div>Проекты</div>
        <div>Создать проект</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 40,
        }}
      >
        <input
          value={task.name}
          onChange={(event) => inputOnChange(event.target.value)}
        />
        <UIButton onClick={createTask} style={{ marginLeft: 10 }} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {taskList.map(renderTask)}
      </div>
    </div>
  )
}

export default MainPage
