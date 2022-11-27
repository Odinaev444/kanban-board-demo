import styled from "styled-components";
import { ReactComponent as Up } from '../assets/icons/Up.svg';

const Container = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  width: inherit;
`
const Dropdown = styled.div`
  display: flex;
  align-items: center;
  width: inherit;
  height: 34px;
  margin-top: 5px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`
const Arrow = styled(Up)`
 transform: rotateX(180deg);
 margin-right: 15px;
 margin-left: 6px;
`
const Link = styled.a`
  height:  34px;
  display: flex;
  font-size: 14px;
  color: #8C939F;
  align-items: center;
  cursor: pointer;
`

interface linkType {
  name: string;
  active: boolean;
}

interface DropdownAccordionType {
  title: string;
  links: linkType[];
}


const DropdownAccordion = ({ title, links }: DropdownAccordionType) => {
  return (
    <Container>
      <Dropdown className="sidebar-link" > <Arrow />{title} </Dropdown>
      {links.map((link: linkType, index: number) => {
        return <Link
          key={index}
          className={`sidebar-link ${link.active && 'sidebar-link-active'}`}
        >
          {link.name}
        </Link>
      })}
    </Container>
  )
}

export default DropdownAccordion