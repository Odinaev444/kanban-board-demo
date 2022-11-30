import styled from "styled-components";

const Container = styled.div.attrs(props => ({
  color: props.color
}))`
  max-width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  height: auto;
  gap: 2px;
  top: 177px;
  margin: 0 10px 10px 10px;
  background: ${props => props.color} ;
  border-radius: 8px;
  cursor: pointer;
`;


const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
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
interface ITask {
  title: string;
  time: string;
  color: string;
  completed?: boolean;
}

const Task = ({ title, time, color, completed }: ITask) => {
  return (
    <Container color={completed ? '#F0F0F0' : color}>
      {completed
        ?
        <CrossedTitle>{title}</CrossedTitle>
        :
        <Title >{title}</Title>
      }
      <Time color={completed ? '' : color}>{time}</Time>
    </Container>
  )
}

export default Task