import { useRef, useState, useLayoutEffect } from "react";
import styled from "styled-components";
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
  display:flex;
  z-index: -1;
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
  border-radius: 4px;
  :hover{
    background: #F5F8FA;
  }
`

interface ListType {
  id: number;
  name: string;
}

const Dropdown = ({ list }: { list: ListType[] }) => {
  const [active, setActive] = useState(false)
  const [name, setName] = useState(list[0].name)

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setActive(active => !active)

    if (ref.current !== null) ref.current.style.zIndex = `${active ? '-1' : '1'}`;
  };

  const handleListButton = (name: string) => () => {
    setActive(active => !active)
    setName(name)
  }

  return (
    <Container >
      <Button onClick={handleClick} color={active ? '#E1E4E7' : '#F5F8FA'}>
        {name}
        {active ? <UpIcon /> : <DownIcon />}
      </Button>
      <List ref={ref} opacity={active ? '1' : '0'} >
        {
          list.map((item) => {
            return (
              <div key={item.id}>
                <ListButton onClick={handleListButton(item.name)}>{item.name} </ListButton>
              </div>
            )
          })
        }
      </List>
    </Container>
  )
}

export default Dropdown