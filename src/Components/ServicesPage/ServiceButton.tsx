import { Card, ButtonBase, Typography } from "@mui/material"
import { useSpring, animated } from "@react-spring/web";
import styled from "@emotion/styled"
import COLORS from "../../constants"

type Props = {
    title: string
    imageUrl: string
}

const Wrapper = styled(animated(Card))`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    margin: 1.5rem;
    border-radius: 50%;
    background-color: ${COLORS.surface};
    position: relative;
    overflow: visible;
`

const StyledButton = styled(ButtonBase)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
`;

const ButtonImg = styled("img")`
    width: 70%;
`

const ButtonText = styled(animated(Typography))`
    font-family: Montserrat;
    font-weight: 600;
    color: ${COLORS.outline};
    position: absolute;
    top: calc(100% + 1rem);
    white-space: nowrap;
`

export const ServiceButton = ({ title, imageUrl}: Props) => {
    const [{ transform }, api] = useSpring(() => ({
        transform: "translateY(0px)",
        config: { tension: 300, friction: 20 },
      }));

      const [opacityStyle, opacityApi] = useSpring(() => ({
        opacity: 0,
        config: { tension: 300, friction: 20 },
      }));
    
      const handleMouseEnter = () => {
        api.start({ transform: "translateY(-10px)" });
        opacityApi.start({ opacity: 1 });
      };
    
      const handleMouseLeave = () => {
        api.start({ transform: "translateY(0px)" });
        opacityApi.start({ opacity: 0 });
      };
      
    return (
        <Wrapper
            style={{ transform }}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <StyledButton>
                <ButtonImg src={imageUrl} alt={`${title} icon`}></ButtonImg>
                <ButtonText style={opacityStyle}>{title}</ButtonText>
            </StyledButton>
        </Wrapper>
    )
}