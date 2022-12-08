import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as PlusIcon } from '../assets/icons/Plus.svg';
import TaskList from '../components/TaskList';
import DndWrapper from '../components/DndWrapper';
import { DnDTaskProps } from '../models/Task';
import Body from '../layouts/Body';
import TasksData from '../tasks.json';

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
    height: 6px;
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
const CreateTaskHeader = styled.div`
  width: 100%;
  height: 58px;
  padding: 0 0 0 36px;
  border-bottom: 1px solid #F3F3F3;
`
const CreateTaskTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 29px;
  gap: 4px;
  color: #8C939F;
  font-size: 14px;
`

const dummyArray: DnDTaskProps[] = TasksData;

const Shedule = () => {
  const [taskData, setTaskData] = useState<DnDTaskProps[]>(dummyArray);

  return (
    <Body>
      <Container>
        <DndWrapper>
          <LeftContainer>
            {taskData.map((task: DnDTaskProps) => {
              return <div key={task.id}>
                <TaskList
                  list={{
                    id: task.id,
                    title: task.title,
                    number: task.number,
                    data: task.data,
                    completed: task.completed,
                  }}
                  dndProps={{
                    itemType: "TASK",
                    setTaskData
                  }}
                />
              </div>
            })
            }
          </LeftContainer>
        </DndWrapper>
        <RightContainer>
          <CreateTaskHeader>
            <CreateTaskTitle>
              <PlusIcon fill="#8C939F" width="13" height="13" />
              CreateTask
            </CreateTaskTitle>
          </CreateTaskHeader>
        </RightContainer>
      </Container>
    </Body>
  )
}

export default Shedule