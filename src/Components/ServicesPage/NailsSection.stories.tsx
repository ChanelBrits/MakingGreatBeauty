import { NailsSection } from "./NailsSection"
import { Meta, StoryObj } from "@storybook/react"

const meta:Meta<typeof NailsSection> = {
    title: "components/NailsSection",
    component: NailsSection,
}

export default meta;

export const Base: StoryObj<typeof NailsSection> = {
    args: {
        
    }
}