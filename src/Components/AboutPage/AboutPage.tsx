import { Box, Typography, Grid } from "@mui/material"
import styled from "@emotion/styled"
import { NavBar } from "../NavBar/NavBar"
import COLORS from "../../constants";

const Wrapper = styled(Box)`
  padding: 1.25rem;
  max-width: 75rem;
  margin: 0 auto;

  @media (max-width: 834px) {
    padding: 1rem;
  }
  @media (max-width: 414px) {
    padding: 0.75rem;
  }
`;

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 35rem;
  position: relative;
  margin-top: 8rem;
  margin-left: -10rem;

  @media (max-width: 834px) {
    margin-left: 0;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 414px) {
    margin-top: 4rem;
  }
`;

const FounderImg = styled('img')`
    height: 35rem;
    width: auto;
    border-radius: 0.5rem;
    margin-bottom: 1.25rem;
    position: absolute;
    right: 10%; 

    @media (max-width: 834px) {
    position: static;
    width: 100%;
    height: auto;
  }

  @media (max-width: 414px) {
    width: 90%;
  }
`;

const Quote = styled(Typography)`
    font-family: "against";
    font-size: 4rem;
    font-weight: bold;
    color: ${COLORS.lightLime};
    text-shadow: 4px 4px 5px ${COLORS.darkGreen};
    text-align: left;
    position: absolute;
    top: 10%; 
    left: 20%; 
    z-index: 1; 

    @media (max-width: 834px) {
    position: static;
    font-size: 3rem;
    margin-top: 2rem;
    text-align: center;
  }

  @media (max-width: 414px) {
    font-size: 2rem;
    margin-top: 1rem;
    text-align: center;
  }
`;

const ColumnText = styled(Typography)`
    font-family: "Josefin Sans"
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: justify;

    @media (max-width: 834px) {
    font-size: 0.9rem;
  }

  @media (max-width: 414px) {
    font-size: 0.8rem;
  }
`;


export const AboutPage = () => {
    return (
        <Wrapper>
            <NavBar></NavBar>
            <ImageContainer >
                <Quote textTransform="uppercase">"Beauty empowers, confidence transforms."</Quote>
                <FounderImg src="/public/assets/images/AboutMain.png" alt="Founder Image" />
            </ImageContainer>
            
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <ColumnText>
                        In 1999, the Making Great Beauty brand was founded by Marlene Wolmarans, a passionate entrepreneur with a deep-seated commitment to providing exceptional beauty services. With humble beginnings, our aim was simple yet profound: to offer clients the quality service they deserved in an industry ripe with possibilities. From day one, our focus has always been on delivering personalized experiences that leave a lasting impression on each client.
                    </ColumnText>
                    <ColumnText>
                        At Making Great Beauty, we believe in the transformative power of beauty and the importance of self-care. Our website is your gateway to a world of luxurious treatments, from rejuvenating facials to stunning nail artistry and relaxing massages. We invite you to experience the magic of Making Great Beauty and discover the true essence of pampering and indulgence.
                    </ColumnText>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ColumnText>
                        Making Great Beauty established its first location in Randpark Ridge. Despite its modest beginnings, the brand quickly gained traction within the local community due to its exceptional service offerings. Through word-of-mouth referrals and targeted marketing efforts, Making Great Beauty built a solid client base, becoming a trusted destination for all beauty needs.
                    </ColumnText>
                    <ColumnText>
                        After a brief hiatus, our passion for the beauty industry has reignited our interest in reviving and growing our company to new heights. Our vision is clear: to see the brand not only thrive but also expand its reach and impact. We are excited about the possibilities that lie ahead and are fully committed to realizing our vision of building a successful and reputable beauty brand that resonates with clients and communities alike.
                    </ColumnText>
                </Grid>
            </Grid>
        </Wrapper>
    )
}