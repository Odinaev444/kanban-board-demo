import styled from "styled-components"

const Container = styled("img")`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
  object-fit: cover;
`
interface AvatarType {
  image: string;
  width: string;
  height: string;
}
const Avatar = ({ image, width, height }: AvatarType) => {
  return (
    <Container src={image} width={width} height={height} />
  )
}

export default Avatar