import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 138px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  :hover{
    background: #FFFFFF;
    border-radius: 0px 8px 8px 0px;
  }
  &.active{
    background: #FFFFFF;
    border-radius: 0px 8px 8px 0px;
    color: #0094FF;
    svg {
      fill: #0094FF;
    }
  }
 
`
const IconBox = styled.div`
 margin: 3px 15px 0 15px;
`
const Rectangle = styled.span`
  position: absolute;
  width: 4.12px;
  height: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  left: 0px;
  top: 0px;
  background: #0094FF;
`
interface ToolType {
  title: string;
  icon: React.ReactNode;
  active?: boolean;
}



const Tool = ({ title, icon, active }: ToolType) => {
  return (
    <Container className={active ? 'active' : ''}>
      {active && <Rectangle />}
      <IconBox >
        {icon}
      </IconBox>
      {title}
    </Container>
  )
}

export default Tool