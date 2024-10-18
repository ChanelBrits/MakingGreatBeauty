import { ServiceLabel } from "./ServiceLabel"
import { Meta, StoryObj } from "@storybook/react"

const meta:Meta<typeof ServiceLabel> = {
    title: "components/ServiceLabel",
    component: ServiceLabel,
}

export default meta;

export const Base: StoryObj<typeof ServiceLabel> = {
    args: {
        title: "Nails"
    }
}