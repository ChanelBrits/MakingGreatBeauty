import { ServicesPage } from "./ServicesPage"
import { Meta, StoryObj } from "@storybook/react"
import { MemoryRouter } from "react-router-dom";

const meta:Meta<typeof ServicesPage> = {
    title: "components/ServicesPage",
    component: ServicesPage,
    decorators: [
        (Story) => (
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        ),
      ],
}

export default meta;

export const Base: StoryObj<typeof ServicesPage> = {
    args: {
    
    }
}