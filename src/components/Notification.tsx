import styled from "styled-components"

import { ReactComponent as Bell } from '../assets/icons/Bell.svg';

const Container = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Badge = styled.div`
  width: 24px;
  height: 20px;
  position: absolute;
  left: 50%;
  right: -25%;
  top: -12.5%;
  bottom: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F21247;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  font-size: 10px;
  color: #FFF;
`

const Notification = ({ count }: { count: number }) => {

  return (
    <Container>
      <Bell />
      {count > 0 && <Badge>{count}+</Badge>}
    </Container>
  )
}

export default Notification