import { Box, Card, Typography} from "@mui/material"
import styled from "@emotion/styled"
import { ServiceButton } from "./ServiceButton"
import COLORS from "../../constants"

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 7rem;
`

export const ServiceSelection = () => {
    return (
        <Wrapper>
                <ServiceButton
                    title={"Nails"}
                    imageUrl="/public/assets/images/nail.png"
                />
                <ServiceButton
                    title={"Feet"}
                    imageUrl="/public/assets/images/pedicure.png"
                />
                <ServiceButton
                    title={"Face"}
                    imageUrl="/public/assets/images/facial-massage.png"
                />
                <ServiceButton
                    title={"Body"}
                    imageUrl="/public/assets/images/body-massage.png"
                />
        </Wrapper>
    )
}