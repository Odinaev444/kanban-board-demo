import styled from "styled-components";

import { ReactComponent as Logo } from '../assets/bordio.svg';
import Avatar from "../components/Avatar";
import SquareSearch from "../components/SquareSearch";
import Workspace from "../components/Workspace";
import User from '../assets/images/user.jpg';
import DropdownAccordion from "../components/DropdownAccordion";

const Root = styled.div`
  width: 219px;
  background: #0F1D40;
  min-height: 100vh;
  
  .sidebar-link{
    :hover{
      background-color: #2D4071;
      width: calc(100% + 15px);
      margin-left: -16px;
      padding-left: 16px;
      color: #ffffff;
    };
  }
  .sidebar-link-active {
    background-color: #2D4071;
    width: calc(100% + 15px);
    margin-left: -16px;
    padding-left: 16px;
    color: #ffffff;
  }
`;
const Container = styled.div`
  padding: 26px 16px 0 16px;
  position: relative;
`;

const BordioLoog = styled(Logo)`
  margin-bottom: 26px;
`
const Menu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 24px;
`

const favorite = [
  { active: false, name: "Marketing" },
  { active: false, name: "Mobile App" },
];

const projects = [
  { active: false, name: "Marketing" },
  { active: false, name: "Landing Pages" },
  { active: false, name: "Wedding" },
  { active: false, name: "Mobile App" },
  { active: false, name: "House Construction" },
];

const SideBar = () => {

  return (
    <Root>
      <Container>
        <BordioLoog />
        <SquareSearch />
        <Menu>
          <Workspace
            name="My workspace"
            icon={<Avatar image={User} width="22px" height="22px" />}
            color="#fff"
            active
          />
          <DropdownAccordion title="Favorites" links={favorite} />
          <DropdownAccordion title="My projects" links={projects} />
        </Menu>
      </Container>
    </Root>
  )
}



export default SideBar