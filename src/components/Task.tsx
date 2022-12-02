import { useRef } from 'react';
import styled from "styled-components";
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier, XYCoord } from 'dnd-core'

import { TaskProps } from "../models/Task";
import { DragItem, ItemTypes } from "../constants/dnd";

const Container = styled.div`
  max-width: 270px; 
  min-height: 68.41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px 0 15px;
  height: auto;
  gap: 2px;
  top: 177px;
  margin: 0 10px 10px 10px;
  background: ${props => props.color} ;
  opacity: ${({ opacity }: { opacity: number }) => opacity} ;
  border-radius: 8px;
  cursor: pointer;
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  ine-height: 16px;
`
const CrossedTitle = styled(Title)`
  text-decoration-line: line-through;
  color:#A5A5A5;
`
const Time = styled.span.attrs(props => ({
  color: props.color
}))`
  font-family: 'Roboto';
  font-size: 13px;
  display: flex;
  align-items: center;
  color: ${props => props.color || '#A5A5A5'};
  
  filter: ${props => props.color ? 'brightness(50%)' : 'unset'} ;
`

const Task = ({ title, props, dndProps }: { title: string, props: TaskProps, dndProps: DragItem }) => {
  const { id, index, name, time, color, completed } = props;
  const { draggable, itemType, moveCard } = dndProps;
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<
    TaskProps,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes[itemType],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: TaskProps, monitor) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      moveCard({ dragIndex, hoverIndex })

      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes[itemType],
    item: { name, time, color, id, title },
    canDrag: () => draggable,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  })

  drag(drop(ref))

  return (
    <Container
      ref={ref}
      opacity={isDragging ? 0.5 : 1}
      data-handler-id={handlerId}
      color={completed ? '#F0F0F0' : color}
    >
      {!isDragging &&
        <>
          {
            completed
              ?
              <CrossedTitle>{name}</CrossedTitle>
              :
              <Title >{name}</Title>
          }
          <Time color={completed ? '' : color}>{time}</Time>
        </>
      }
    </Container>
  )
}

export default Task