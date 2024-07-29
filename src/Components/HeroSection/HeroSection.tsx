import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import COLORS from "../../constants";
import { useSpring, useTrail, animated } from '@react-spring/web';


const Wrapper = styled(Box)`
    position: relative;
    overflow: hidden;
`

const HeroBanner = styled(Box)`
    position: relative;
    width: 100%;
    height: 100vh;
    top: 6.7rem;
    padding: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HeroBannerBackground = styled("img")`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`

const ContentWrapper = styled(Box)`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: center; 
    width: 100%;
`;

const HeroBannerImg = styled("img")`
    width: 30%; 
    height: auto;
    object-fit: cover;
    padding-right: 10rem;
    padding-bottom: 7rem;
`

const TextWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 9rem;
`

const AnimatedTypography = animated(Typography);

const HeroBannerText = styled(AnimatedTypography)`
    font-family: "against";
    color: ${COLORS.font};
`

const DiscoverRadianceText = styled(HeroBannerText)`
    margin-bottom: 0;
    text-align: left;
    transform: translateY(-50%);
`;

const TextContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
`;

const ParagraphText = styled(Typography)`
    font-family: "Josefin Sans";
    font-size: 14pt;
    padding-top: 2rem;
    padding-bottom: 2rem;
`

const LandingBtn = styled(Button)`
    background-color: ${COLORS.lightGreen};
    text-align: center;
    border-radius: 1rem;
    text-transform: none;
    font-family: "Josefin Sans";
    font-size: 12pt;
    color: ${COLORS.surface};

    &:hover {
    background-color: ${COLORS.darkGreen};
    }
`

export const HeroSection = () => {
    const discoverRadianceSpring = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 700 });
    const trail = useTrail(3, {
        opacity: 1,
        transform: 'translate3d(0,0,0)',
        from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
        delay: 1500,
    });

    const texts = [
        "Inside",
        "and",
        "Out",
    ];

    return (
        <Wrapper>
            <HeroBanner>
                <HeroBannerBackground src="./public/assets/images/WebBanner.png" alt="Green abstract flower banner" />
                <ContentWrapper>
                    <HeroBannerImg src="./public/assets/images/MGB_Hero.png"/>

                    <TextWrapper>
                        <DiscoverRadianceText
                            style={discoverRadianceSpring}
                            variant={"h2"}
                            textTransform={"uppercase"}
                            letterSpacing={"0.15rem"}
                        >
                            Discover Radiance
                        </DiscoverRadianceText>
                        <TextContainer>
                            {texts.map((text, index) => (
                                <HeroBannerText
                                    key={index}
                                    style={trail[index]}
                                    variant={"h2"}
                                    textTransform={"uppercase"}
                                    letterSpacing={"0.15rem"}
                                >
                                    {text}
                                </HeroBannerText>
                            ))}
                        </TextContainer>
                        <ParagraphText>
                            Welcome to Making Great Beauty, where wellness meets beauty in perfect harmony.
                            Unwind, <br/> rejuvenate, and embrace your best self with our exclusive range of holistic treatments and spa experiences.
                        </ParagraphText>
                        <LandingBtn>Step into Serenity</LandingBtn>
                    </TextWrapper>

                </ContentWrapper>
            </HeroBanner>
        </Wrapper>
    )
}