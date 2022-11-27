import styled from "styled-components"

import { ReactComponent as SearchIcon } from '../assets/icons/Search.svg';

const Container = styled.div`
  width: 180px;
  height: 40px;
  background: #F5F8FA;
  border-radius: 50px;
  padding-left: 16px;
  padding-right: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  
  input{
    border: none;
    outline: none;
    background: inherit;
  }
`;

const CircleSearch = () => {
  return (
    <Container>
      <input placeholder="Search..." />
      <SearchIcon />
    </Container>
  )
}

export default CircleSearch