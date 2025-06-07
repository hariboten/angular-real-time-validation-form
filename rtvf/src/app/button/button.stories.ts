import { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<Button>;

export const Default: StoryObj<Button> = {
  args: {
    label: 'button',
  },
};
