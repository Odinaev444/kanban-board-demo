import styled from "styled-components"
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
const List = styled.ul`
  width: 132px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 6px;
  list-style-type: none;
  display: none;
  background: #FFFFFF;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  ''
`
const Dropdown = ({ name, active }: { name: string, active?: boolean }) => {
  return (
    <Container>
      <Button color={active ? '#E1E4E7' : '#F5F8FA'}>
        {name}
        {active ? <UpIcon /> : <DownIcon />}
      </Button>
      <List>
        <li>Board </li>
        <li>Table View </li>
        <li>Knaban </li>
      </List>
    </Container>
  )
}

export default Dropdown