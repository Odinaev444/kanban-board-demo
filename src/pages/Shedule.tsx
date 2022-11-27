import styled from 'styled-components';

import { ReactComponent as PlusIcon } from '../assets/icons/Plus.svg';
import TaskList from '../components/TaskList';
import Body from '../layouts/Body';
import { TaskProps } from '../models/Task';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const CreateTask = styled.div`
  width: 377px;
  height: auto;
  color: #8C939F;
`
const CreateTaskTitle = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  border: 1px solid #F3F3F3;
  padding: 0 0 0 36px;
`

const tasks: TaskProps[] = [
  {
    name: 'Check email',
    time: '0:20h',
    color: '#ABE9CE'
  },
  {
    name: 'Compare PPC agencies and make a report for Steven',
    time: '3:00h',
    color: '#D8DCFF'
  },
  {
    name: 'Meeting with Amanda (PR department)',
    time: '0:30h',
    color: '#FFDFBA'
  },
  {
    name: "Get Patrick's approval for homepage new design",
    time: '2:30h',
    color: '#F2BAE1'
  },
];

const Shedule = () => {
  return (
    <Body>
      <Container>
        <TaskList
          title="New Task"
          number={4}
          tasks={tasks}
        />
        <TaskList
          title="Scheduled"
          number={3}
          tasks={tasks}
        />
        <TaskList
          title="In progress"
          number={3}
          tasks={tasks}
        />
        <TaskList
          title="Completed"
          number={5}
          tasks={tasks}
          completed
        />
        <CreateTask>
          <CreateTaskTitle>
            <PlusIcon fill="#8C939F" width="13" height="13" />CreateTask

          </CreateTaskTitle>
        </CreateTask>
      </Container>
    </Body>
  )
}

export default Shedule