import { Box, Typography } from "@mui/material"
import styled from "@emotion/styled"
import COLORS from "../../constants"

type Props = {
  title: string
}

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  width: 8rem;
  background-color: ${COLORS.primary};
  border-top-right-radius: 4rem;
  border-bottom-right-radius: 4rem;
`
const Title = styled(Typography)`
  color: ${COLORS.surface};
  font-family: "against";
  font-size: 42pt;
  transform: rotate(-90deg);
`


export const ServiceLabel = ({title}: Props) => {
  return (
    <Wrapper>
      <Title textTransform={"uppercase"} >{title}</Title>
    </Wrapper>
  )
}