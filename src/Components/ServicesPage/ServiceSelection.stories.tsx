import { ServiceSelection } from "./ServiceSelection"
import { Meta, StoryObj } from "@storybook/react"

const meta:Meta<typeof ServiceSelection> = {
    title: "components/ServiceSelection",
    component: ServiceSelection,
}

export default meta;

export const Base: StoryObj<typeof ServiceSelection> = {
    args: {
    
    }
}