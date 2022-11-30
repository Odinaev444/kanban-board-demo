import styled from 'styled-components';
import { ITask, TaskProps } from '../models/Task';
import Task from './Task';
import TaskTitle from './TaskTitle';

const Column = styled.div`
  width: 300px;
  height: 100%;
`
const ColumnHeader = styled.div`
  width: 300px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #F3F3F3;
  border-bottom: 1px solid #F3F3F3;
`
const ColumnBody = styled.div`
  width: 300px;
  height: inherit;
  padding-top: 39px;
  border-right: 1px solid #F3F3F3;
`

const TaskList = ({ title, number, tasks, completed }: ITask) => {

  return (
    <Column>
      <ColumnHeader>
        <TaskTitle title={title} number={number} />
      </ColumnHeader>
      <ColumnBody>
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
      </ColumnBody>
    </Column>
  )
}

export default TaskList