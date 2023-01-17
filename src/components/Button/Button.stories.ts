import  { Meta, StoryObj } from '@storybook/react';

import Button  from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'CK16-UI-Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    color:"primary",
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    color:"secondary",
    label: 'Button',
  },
};

export const Navigate: Story = {
  args:{
    color:'nevigate',
    label:"Button"
  }
}

export const Outlined: Story = {
  args: {
    variant:"outlined",
    label: 'Button',
  },
};

export const Text: Story = {
  args: {
    variant:"text",
    label: 'Button',
  },
};
