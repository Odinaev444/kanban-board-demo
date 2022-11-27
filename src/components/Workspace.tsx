import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: inherit;
  height: 34px;
  color: ${props => props.color};
  font-size: 14px;
  cursor: pointer;
`;

const Title = styled.span`
 margin-left: 8px;
`
interface WorkspaceType {
  name: string;
  icon: React.ReactNode;
  color: string;
  active?: boolean;
}
const Workspace = ({ name, icon, color, active }: WorkspaceType) => {
  return (
    <Container color={color} className={`sidebar-link ${active && 'sidebar-link-active'}`}>
      {icon}
      <Title >{name}</Title>
    </Container>
  )
}

export default Workspace