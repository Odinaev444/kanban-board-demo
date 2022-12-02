import styled from "styled-components";

const StyledButton = styled.button`
  width: 119px;
  height: 40px;
  background: #0094FF;
  border-radius: 50px;
  color: #FFF;
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  :active{
    background: rgb(0, 118, 204);
  } 
`;

interface IButton {
  name: string;
  icon?: React.ReactNode;
}

const Button = ({ name, icon }: IButton) => {

  return (
    <StyledButton>
      {icon && icon}
      {name}
    </StyledButton>
  )
}

export default Button