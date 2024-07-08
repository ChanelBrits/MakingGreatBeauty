import { Box, ButtonBase, Typography } from "@mui/material"
import { Close } from '@mui/icons-material';
import styled from "@emotion/styled"
import COLORS from "../../constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100vh;
`

const CloseBtn = styled(ButtonBase)`
  position: absolute;
  top: 2.5rem;
  right: 3rem;
`;

const MenuItemBtn = styled(ButtonBase)`
    display: inline-flex;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    width: auto;

  &:hover {
    background-color: ${COLORS.primary};
    border-radius: 2rem;
  }
`;

const MenuItemText = styled(Typography)`
    font-family: "Josefin Sans";
    font-weight: 600;
    color: ${COLORS.font};
`;

export const MenuPage = () => {
    const [ menuClose, setMenuClose ] = useState(false);
    const navigate = useNavigate();

    const handleToggle = () => {
        setMenuClose((prevClose) => !prevClose);
        navigate("/");
    };

    return (
        <Wrapper>
            <CloseBtn onClick={handleToggle}>
                <Close fontSize="large" sx={{color: COLORS.outline}}/>
            </CloseBtn>
            <MenuItemBtn>
                <MenuItemText variant="h6" letterSpacing={"0.15rem"}>Home</MenuItemText>
            </MenuItemBtn>
            <MenuItemBtn>
                <MenuItemText variant="h6" letterSpacing={"0.15rem"}>About</MenuItemText>
            </MenuItemBtn>
            <MenuItemBtn>
                <MenuItemText variant="h6" letterSpacing={"0.15rem"}>Services</MenuItemText>
            </MenuItemBtn>
            <MenuItemBtn>
                <MenuItemText variant="h6" letterSpacing={"0.15rem"}>Contact Us</MenuItemText>
            </MenuItemBtn>
        </Wrapper>
    )
}