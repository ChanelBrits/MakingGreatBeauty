import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"
import { ServiceSelection } from "./ServiceSelection"
import COLORS from "../../constants";
import { NavBar } from "../NavBar/NavBar";

const Wrapper = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    box-sizing: border-box;
`

const ServicesBackground = styled("img")`
    width: 100%;
    height: 100vh;
`

const PageTitle = styled(Typography)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4.2rem;
    font-family: "against";
    color: ${COLORS.surface};
    z-index: 1;
`
const ServiceSelectionWrapper = styled(Box)`
    position: absolute;
    top: 18rem;
`;

const HalfBanner = styled(Box)`
    position: absolute;
    top: 3rem;
    height: 14rem;
    width: calc(100% - 4rem);
    background-color: ${COLORS.primary};
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;

    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        background-color: ${COLORS.surface};
    }

    &::before {
        height: 4px;
        bottom: 9%;
    }

    &::after {
        height: 2px;
        bottom: 5%;
    }
`



export const ServicesPage = () => {
    return (
        <Wrapper>
            <ServicesBackground src="/public/assets/images/SimpleBackground.png"></ServicesBackground>
            <NavBar/>
            <HalfBanner>
                <PageTitle variant="h1" letterSpacing={"0.15rem"}>Our Services</PageTitle>
            </HalfBanner>
            <ServiceSelectionWrapper>
                <ServiceSelection/>
            </ServiceSelectionWrapper>
        </Wrapper>
    )
}



{/* <ServiceSelectionWrapper>
    
</ServiceSelectionWrapper> */}


// <BannerContainer>
            //     {/* <ServicesBanner></ServicesBanner> */}
            // </BannerContainer>

            // const BannerContainer = styled(Box)`
//     display: flex;
//     position: relative;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
// `;