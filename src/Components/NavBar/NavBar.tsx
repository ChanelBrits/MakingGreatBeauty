import { 
  AppBar, 
  Toolbar, 
  Typography, 
  ButtonBase, 
  Box, 
 } from "@mui/material";
import { MenuRounded } from '@mui/icons-material';
import styled from "@emotion/styled";
import { animated, useSpring } from "@react-spring/web";
import COLORS from "../../constants";
import "./index.css";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled("nav")`
  position: absolute;
  top: 1.875rem;
  right: 1.3rem;
  left: 1.25rem;
  height: 4.5rem;
  width: calc(100% - 2.55rem);

  @media (max-width: 1024px) {
    top: 1rem;
    right: 1rem;
    left: 1rem;
    height: 5rem;
    width: 36vh;
    width: calc(100% - 2rem);
  }
`;


const StyledNav = styled(AppBar)`
  background-color: ${COLORS.surfaceCont};
  position: absolute;
  border-radius: 0.625rem;
  height: 100%;

  @media (max-width: 1024px) {
    border-radius: 0.5rem;
  },
`;

const StyleToolbar = styled(Toolbar)`
  && {
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  };
  height: 100%;
  
   @media (max-width: 1024px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`
const Home = styled(Typography)`
  font-family: "against";
  color: ${COLORS.font};
  justify-self: left;
  padding: 1.2rem;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`

const SideButtonsCont = styled(Box)`
  display: none;
  align-items: center;
  gap: 8rem;
  padding-right: 2rem;

  @media (min-width: 1024px) {
    display: flex;
  }
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

const Logo = styled('img')`
  width: 3.5rem;

  @media (min-width: 1024px) {
    display: none;
  }
`

const MenuBtn = styled(MenuRounded)`
  color: ${COLORS.outline};
  font-size: 2.5rem;

  @media (min-width: 1024px) {
    display: none;
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
  const [ menuOpen, setMenuOpen ] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
    navigate("/menu");
  };

  return (
    <Wrapper>
      <StyledNav>
        <StyleToolbar>
          <Logo src="public/assets/images/MGB_Icon.png"/>
          <Home variant="h5" textTransform={"uppercase"}>Making Great Beauty</Home>

          <ButtonBase onClick={handleToggle}>
            <MenuBtn fontSize="large"/>
          </ButtonBase>

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
