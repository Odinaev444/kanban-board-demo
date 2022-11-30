import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as Up } from '../assets/icons/Up.svg';

const Container = styled.div`
  position: relative;
`
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px 8px 20px;
  cursor: pointer;
  width: 114px;
  height: 40px;
  background: ${props => props.color};
  border-radius: 50px;
  border: none;
  font-size: 14px;
`
const UpIcon = styled(Up)`
  margin-left: 15px;
`
const DownIcon = styled(UpIcon)`
  transform: rotateX(180deg);
`
const List = styled.div`
  position: absolute;
  width: 132px;
  min-height: 132px;
  display: flex;
  opacity: ${({ opacity }: { opacity: string }) => opacity};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 6px 0 6px;
  margin-top: 8px;
  list-style-type: none;
  background: #FFFFFF;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  -webkit-animation: opacity 0.1s ease-out;
  -moz-animation: opacity 0.1s ease-out;
  -o-animation: opacity 0.1s ease-out;
  transition: opacity 0.1s ease-out;
`
const ListButton = styled.li`
  width: 124px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  padding-left: 8px;
  cursor: pointer;
  :hover{
    background: #F5F8FA;
    border-radius: 4px;
  }
`

const Dropdown = ({ name }: { name: string }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => setActive(active => !active);

  return (
    <Container onClick={handleClick}>
      <Button color={active ? '#E1E4E7' : '#F5F8FA'}>
        {name}
        {active ? <UpIcon /> : <DownIcon />}
      </Button>
      <List opacity={active ? '1' : '0'}>
        <ListButton>Board </ListButton>
        <ListButton>Table View </ListButton>
        <ListButton>Knaban </ListButton>
      </List>
    </Container>
  )
}

export default Dropdown