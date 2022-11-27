import styled from "styled-components";

const Container = styled.div`
  min-width: 95px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  gap:10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  font-family: 'Roboto Bold';
`;

const Badge = styled.div`
  width: 26px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #E8EBEF;
  border-radius: 100px;
`;

const Number = styled.span`
  font-size: 14px;
  color: #8C939F;
`
interface TaskTitleType {
  title: string;
  number: number;
}
const TaskTitle = ({ title, number }: TaskTitleType) => {
  return (
    <Container>
      {title}
      <Badge>
        <Number>{number}</Number>
      </Badge>
    </Container>
  )
}

export default TaskTitle