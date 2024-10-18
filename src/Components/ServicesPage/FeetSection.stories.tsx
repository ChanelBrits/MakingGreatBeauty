import { FeetSection } from "./FeetSection"
import { Meta, StoryObj } from "@storybook/react"

const meta:Meta<typeof FeetSection> = {
    title: "components/FeetSection",
    component: FeetSection,
}

export default meta;

export const Base: StoryObj<typeof FeetSection> = {
    args: {
        
    }
}