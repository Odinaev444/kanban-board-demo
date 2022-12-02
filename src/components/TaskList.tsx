import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper'


import { TaskProps, DnDTaskProps } from '../models/Task';
import Task from './Task';
import TaskTitle from './TaskTitle';
import { DndProps, ItemTypes, MoveCard } from '../constants/dnd';

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
  background: ${({ background }: { background: string }) => background};
`

const TaskList = ({ list, dndProps }: { list: DnDTaskProps, dndProps: DndProps }) => {

  const { title, number, data, completed } = list;
  const [taskList, setTaskList] = useState(data);
  const { itemType, onDrop } = dndProps;

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes[itemType],
    drop: (item: DnDTaskProps) => onDrop?.(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  })


  const moveCard = useCallback(({ dragIndex, hoverIndex }: MoveCard) => {

    if (dragIndex === undefined) return;

    setTaskList((prevCards: TaskProps[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    )
  }, [])

  return (
    <Column>
      <ColumnHeader>
        <TaskTitle title={title} number={number} />
      </ColumnHeader>
      <ColumnBody background={isOver ? '#e9f5ff' : ''} ref={drop}>
        {taskList.map((arr: TaskProps, index: number) => {
          return (
            <div key={arr.id}>
              <Task
                title={title}
                props={{
                  id: arr.id,
                  index,
                  name: arr.name,
                  time: arr.time,
                  color: arr.color,
                  completed: completed ? true : false
                }}
                dndProps={{
                  itemType: itemType,
                  draggable: true,
                  moveCard
                }}
              />
            </div>
          )
        })}
      </ColumnBody>
    </Column>
  )
}

export default TaskList