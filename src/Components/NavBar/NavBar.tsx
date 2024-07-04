import { AppBar, Toolbar } from "@mui/material";
import styled from "@emotion/styled";
import COLORS from "../../constants";
import "./index.css";

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

export const NavBar = () => {
  return (
    <Wrapper>
      <StyledNav></StyledNav>
    </Wrapper>
  );
};
