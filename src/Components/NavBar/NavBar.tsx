import { AppBar, Toolbar, Typography, ButtonBase, Box } from "@mui/material";
import styled from "@emotion/styled";
import { animated, useSpring } from "@react-spring/web";
import COLORS from "../../constants";
import "./index.css";
import { ReactNode } from "react";

const Wrapper = styled("nav")({
  position: "absolute",
  top: "1.875rem",
  right: "1.3rem",
  left: "1.25rem",
  height: "4.5rem",
});

const StyledNav = styled(AppBar)({
  backgroundColor: COLORS.surfaceCont,
  position: "absolute",
  borderRadius: "0.625rem",
  height: "100%",
});

const StyleToolbar = styled(Toolbar)`
  && {
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    alignItems: center;
  };
  height: 100%;
  
`
const Home = styled(Typography)({
  fontFamily: "against",
  color: COLORS.font,
  justifySelf: "left",
  padding: "1.2rem",
});

const SideButtonsCont = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8rem;
  padding-right: 2rem;
`
const StyledButtonText = styled(Typography)({
  fontFamily: '"Josefin Sans", sans-serif',
  fontWeight: "600",
  color: COLORS.font
})

const AnimatedButton = styled(animated(ButtonBase))`
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${COLORS.primary};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }
  &:hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

type NavButtonProps = {
  children: ReactNode
}

const NavButton: React.FC<NavButtonProps> = ({children}) => {
  const [springs, api] = useSpring(() => ({
    transform: 'translateY(0px)',
    config: { tension: 300, friction: 10 }
  }));
  
  return (
    <AnimatedButton
      onMouseEnter={() => api.start({ transform: 'translateY(-3px)' })}
      onMouseLeave={() => api.start({ transform: 'translateY(0px)' })}
      style={springs}
    >
      {children}
    </AnimatedButton>
  )
}

export const NavBar = () => {
  return (
    <Wrapper>
      <StyledNav>
        <StyleToolbar>
          <Home variant="h5" textTransform={"uppercase"}>Making Great Beauty</Home>
          <SideButtonsCont>
            <NavButton>
              <StyledButtonText variant="h6" textTransform={"uppercase"} letterSpacing={"0.15rem"}>About</StyledButtonText>
            </NavButton>

            <NavButton>
              <StyledButtonText variant="h6" textTransform={"uppercase"} letterSpacing={"0.15rem"}>Services</StyledButtonText>
            </NavButton>

            <NavButton>
              <StyledButtonText variant="h6" textTransform={"uppercase"} letterSpacing={"0.15rem"}>Contact Us</StyledButtonText>
            </NavButton>
          </SideButtonsCont>
        </StyleToolbar>
      </StyledNav>
    </Wrapper>
  );
};
