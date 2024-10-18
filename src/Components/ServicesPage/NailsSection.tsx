import { Box } from "@mui/material"
import { Pricing } from "./Pricing/Pricing"
import { Services } from "./serviceData"
import { ServiceLabel } from "./ServiceLabel"
import styled from "@emotion/styled"

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
`

const PricingCont = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 68rem;
  padding: 1rem;
`

export const NailsSection = () => {
  const nailServices = Object.values(Services.nails)

  return (
    <Wrapper>
      <ServiceLabel title="Nails"/>
      <PricingCont>
        <Pricing blocks={nailServices}></Pricing>
      </PricingCont>
    </Wrapper>
    
  )
}