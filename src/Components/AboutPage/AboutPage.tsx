import { Box } from "@mui/material"
import styled from "@emotion/styled"

const FounderImg = styled('img')`
    height: 50%;

`

export const AboutPage = () => {
    return (
        <Box>
            <FounderImg src="/public/assets/images/AboutMain.png" alt="Founder Image" />
            <div>123</div>
        </Box>
    )
}