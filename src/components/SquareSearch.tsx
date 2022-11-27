import styled from "styled-components"

import { ReactComponent as SearchIcon } from '../assets/icons/Search.svg';

const Container = styled.div`
  position : relative;
  width: 187px;
  height: 32px;
  background: #2D4071;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
  input{
    position absolute;
    left: 10px;
    color: #fff;
    border: none;
    outline: none;
    background: inherit;
    ::placeholder{
      color: #8C939F;
    }
  }
`;

const Search = styled(SearchIcon)`
  position absolute;
  right: 10px;
`

const SquareSearch = () => {
  return (
    <Container>
      <input placeholder="Search..." />
      <Search />
    </Container>
  )
}

export default SquareSearch