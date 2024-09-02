import { action } from "@storybook/addon-actions";
import { StoryFn } from "@storybook/react";
import React from "react";

import { Sample } from "../Sample";

const Default = {
  title: "Sample",
  component: Sample,
  args: { title: "Hello, World!" },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "サンプルコンポーネントです",
      },
    },
  },
};

export default Default;
export const Template: StoryFn<typeof Sample> = (args) => <Sample {...args} />;
