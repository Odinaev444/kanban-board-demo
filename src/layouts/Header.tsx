import styled from "styled-components"

import Avatar from "../components/Avatar";
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import Notification from "../components/Notification";
import CircleSearch from "../components/CircleSearch";
import { ReactComponent as Plus } from '../assets/icons/Plus.svg';
import User from '../assets/images/user.jpg';


const Root = styled.div`
  width: calc(100vw - 373px);
  height: 80px;
  left: 373px;
  top: 0px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px #F0F1F2;
`
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const PlusIcon = styled(Plus)`
  margin-right:7px;
`
const LeftTab = styled.div`
  width:378px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const RightTab = styled(LeftTab)`
  width: 310px;
  margin-left:auto;
  margin-right: 0;
  justify-content: space-between;
`
const list1 = [
  {
    id: 1,
    name: 'Kanban',
    active: false,
  },
  {
    id: 2,
    name: 'Table View',
    active: false,
  },
  {
    id: 3,
    name: 'Board',
    active: true,
  }
]
const list2 = [
  {
    id: 1,
    name: 'Filter',
    active: false,
  },
  {
    id: 2,
    name: 'Filter 2',
    active: false,
  },
  {
    id: 3,
    name: 'Filter 3',
    active: true,
  }
]

const Header = () => {


  return (
    <Root>
      <Container>
        <LeftTab>
          <Button name="Add new" icon={<PlusIcon fill="#ffffff" />} />
          <Dropdown list={list1} />
          <Dropdown list={list2} />
        </LeftTab>
        <RightTab>
          <CircleSearch />
          <Notification count={99} />
          <Avatar image={User} width="40px" height="40px" />
        </RightTab>
      </Container>
    </Root>
  )
}

export default Header