import styled from 'styled-components';

import { ReactComponent as PlusIcon } from '../assets/icons/Plus.svg';
import TaskList from '../components/TaskList';
import Body from '../layouts/Body';
import { TaskProps } from '../models/Task';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`
const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  

  ::-webkit-scrollbar-thumb {
    background:#939393; 
    border-radius: 20px;
  }


 
`
const RightContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  min-width: 377px;
  border-left: 1px solid #F3F3F3;
`
const CreateTaskTitle = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 0 0 0 36px;
  border-bottom: 1px solid #F3F3F3;
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
        <LeftContainer>

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
        </LeftContainer>
        <RightContainer>
          <CreateTaskTitle>
            <PlusIcon fill="#8C939F" width="13" height="13" />
            CreateTask
          </CreateTaskTitle>
        </RightContainer>
      </Container>
    </Body>
  )
}

export default Shedule