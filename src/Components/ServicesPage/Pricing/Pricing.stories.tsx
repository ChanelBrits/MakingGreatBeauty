import { Pricing } from "./Pricing"
import { Meta, StoryObj } from "@storybook/react"

const meta:Meta<typeof Pricing> = {
    title: "components/Pricing",
    component: Pricing,
}

export default meta;

export const Base: StoryObj<typeof Pricing> = {
    args: {
      title: "Nails",
      services: [
          { name: "Service 1", price: "$99" },
          { name: "Service 2", price: "$149" },
          { name: "Service 3", price: "$199" },
          { name: "Service 4", price: "$249" },
      ],
    }
}