import styled from "@emotion/styled"
import { Box, Typography, Paper } from "@mui/material"
import { ServiceSelection } from "./ServiceSelection"
import COLORS from "../../constants";
import { NavBar } from "../NavBar/NavBar";
import { ScrollIcon } from "../Utils/ScrollIcon/ScrollIcon";
import { NailsSection } from "./NailsSection";

const Wrapper = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    box-sizing: border-box;
    height: 200vh;
    overflow: hidden;
`

const ServicesBackground = styled("img")`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const PageTitle = styled(Typography)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4.2rem;
    font-family: "against";
    color: ${COLORS.surface};
    z-index: 2;
`
const ServiceSelectionWrapper = styled(Box)`
    position: absolute;
    top: 18rem;
    z-index: 2;
`;

const ServicesBanner = styled(Box)`
    position: absolute;
    top: 3rem;
    height: 14rem;
    width: calc(100% - 4rem);
    background-color: ${COLORS.primary};
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    z-index: 2;

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

const ServicesInfo = styled(Paper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 24%;
    width: calc(100% - 20rem);
    height: 20rem;
    background-color: ${COLORS.surface};
    color: ${COLORS.surface};
    border-radius: 1.5rem;
    z-index: 3;
`

const InfoImg = styled("img")`
    width: 25rem;
    border-radius: 1rem;
    margin-left: 5rem;
`

const TextWrapper = styled(Box)`
    width: 40rem;
    margin-right: 6rem;
`

const InfoText = styled(Typography)`
    color: ${COLORS.font};
    font-family: "Josefin Sans";
`

const ScrollIconWrapper = styled(Box)`
    position: absolute;
    top: 44%;
    z-index: 2;
`;

const ServiceSectionCont = styled(Box)`
    margin-top: 34rem; 
    width: 100%;
    z-index: 2;
    padding: 2rem 0;
`;

export const ServicesPage = () => {
    return (
        <Wrapper>
            <ServicesBackground src="/public/assets/images/SimpleBackground.png"></ServicesBackground>
            <NavBar/>
            <ServicesBanner>
                <PageTitle variant="h1" letterSpacing={"0.15rem"}>Our Services</PageTitle>
            </ServicesBanner>
            <ServiceSelectionWrapper>
                <ServiceSelection/>
            </ServiceSelectionWrapper>

            <ServicesInfo elevation={9}>
                <InfoImg src="/public/assets/images/ServicesImg.jpg" alt="Nails on a bed of leaves" />
                <TextWrapper>
                    <InfoText variant="h5">
                        At Making Great Beauty, we offer a wide range of luxurious services designed to enhance your natural beauty and provide ultimate relaxation. 
                        Discover the perfect blend of beauty and relaxation with our exceptional treatments tailored to your needs.
                    </InfoText>
                </TextWrapper>
            </ServicesInfo>

            <ScrollIconWrapper>
                <ScrollIcon/>
            </ScrollIconWrapper>
            
            <ServiceSectionCont>
                <NailsSection></NailsSection>
            </ServiceSectionCont>
        </Wrapper>
    )
}