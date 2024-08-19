import { ServiceButton } from "./ServiceButton"
import { Meta, StoryObj } from "@storybook/react"

const meta:Meta<typeof ServiceButton> = {
    title: "components/ServiceButton",
    component: ServiceButton,
}

export default meta;

export const Base: StoryObj<typeof ServiceButton> = {
    args: {
        title: "Nails",
        imageUrl: "./public/assets/images/nail.png"
    }
}