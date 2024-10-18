import { Box, Typography, Paper } from "@mui/material"
import styled from "@emotion/styled";
import COLORS from "../../../constants";
import { PricingProps } from "../../Utils/utils";


const Wrapper = styled(Paper)`
    width: 17rem;
    height: 12rem;
    padding: 2rem;
    padding-top: 1rem;
    background-color: ${COLORS.surfaceCont};
    border-radius: 1.5rem;
`;

const Title = styled(Typography)`
    font-family: "Josefin Sans";
    font-size: 1.5rem;
    text-wrap: nowrap;
    color: ${COLORS.primary};
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: center;
`;

const ServiceList = styled(Box)<{serviceCount: number}>`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    min-height: 10rem;
`;

const ServiceItem = styled(Box)`
    display: flex;
    justify-content: space-between;
`;

const ServiceName = styled(Typography)`
    font-size: 1rem;
    font-weight: 500;
    text-wrap: wrap;
    width: 13rem;
`;

const ServicePrice = styled(Typography)`
    font-size: 1rem;
    font-weight: 700;
    color: ${COLORS.font};
`;

export const Pricing = ({ blocks }: PricingProps) => {
  return (
    <>
      {
        blocks.map((block, index) => (
          <Wrapper elevation={5} key={index}>
              <Title>{block.title}</Title>
              <ServiceList serviceCount={block.services.length}>
                {
                  block.services
                    .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
                    .map((service, index) => (
                      <ServiceItem key={index}>
                        <ServiceName>{service.name}</ServiceName>
                        <ServicePrice>{`R ${service.price}`}</ServicePrice>
                      </ServiceItem>
                    ))
                }
              </ServiceList>
          </Wrapper>
        ))
      }
    </>
  )
}

