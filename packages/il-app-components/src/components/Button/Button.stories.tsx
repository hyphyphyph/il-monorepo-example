import type { Meta } from "@storybook/react";
import { Button } from "./Button.tsx";

const meta = {
    title: "Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof Button>;

export default meta;

export const Default = () => {
    return <Button>Hello World</Button>;
};
