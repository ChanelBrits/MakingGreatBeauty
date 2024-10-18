import { AboutPage } from "./AboutPage"
import { Meta, StoryObj } from "@storybook/react"
import { MemoryRouter } from "react-router-dom";

const meta:Meta<typeof AboutPage> = {
    title: "components/AboutPage",
    component: AboutPage,
    decorators: [
      (Story) => (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      ),
    ],
}

export default meta;

export const Base: StoryObj<typeof AboutPage> = {
    args: {
        
    }
}