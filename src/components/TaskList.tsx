import styled from 'styled-components';
import { ITask, TaskProps } from '../models/Task';
import Task from './Task';
import TaskTitle from './TaskTitle';

const Root = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 82px);
`
const Top = styled.div`
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Bottom = styled.div`
  border: 1px solid #F3F3F3;
  border-left: none;
  border-bottom: none;
  height: calc(100vh - 138px);
  padding: 39px 10px 0 10px;
  diplay: flex;
  flex-direction: column;
`

const TaskList = ({ title, number, tasks, completed }: ITask) => {

  return (
    <Root>
      <Top>
        <TaskTitle title={title} number={number} />
      </Top>
      <Bottom>
        {tasks.map((arr: TaskProps, index) => {
          return (
            <div key={index}>
              <Task
                title={arr.name}
                time={arr.time}
                color={arr.color}
                completed={completed ? true : false}
              />
            </div>
          )
        })}
      </Bottom>
    </Root>
  )
}

export default TaskList