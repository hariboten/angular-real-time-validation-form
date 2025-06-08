import { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<Button>;

export const Button00Default: StoryObj<Button> = {
  args: {
    label: 'button',
  },
};

export const Button01Disabled: StoryObj<Button> = {
  args: {
    label: 'disabled',
    disabled: true,
  },
};
