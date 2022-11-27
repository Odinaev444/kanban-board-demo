import styled from 'styled-components';

import Header from '../layouts/Header';
import SideBar from './SideBar';
import Tools from './Tools';

const Root = styled.div`
  display: flex;
  flex-direction: row;
`

const Wrapper = styled.div`
  width: calc(100vw - 373px);
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
`


const Body: React.FC<React.PropsWithChildren> = (props) => {

  return (
    <Root>
      <SideBar />
      <Tools />
      <Wrapper>
        <Header />
        <Container >{props.children}</Container>
      </Wrapper>
    </Root>
  )
}

export default Body