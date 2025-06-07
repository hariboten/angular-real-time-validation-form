import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { RequiredMark } from './required-mark';

export default {
  title: 'Components/RequiredMark',
  component: RequiredMark,
  decorators: [
    componentWrapperDecorator(
      (story) => `<span style="border: 1px solid #ccc;">${story}</span>`
    ),
  ],
} as Meta<RequiredMark>;

export const RequiredMark00Default: StoryObj<RequiredMark> = {
  args: {
    required: true,
    filled: false,
  },
};

export const RequiredMark01Filled: StoryObj<RequiredMark> = {
  args: {
    required: true,
    filled: true,
  },
};

export const RequiredMark02NonRequired: StoryObj<RequiredMark> = {
  args: {
    required: false,
    filled: false,
  },
};

export const RequiredMark03NonRequiredFilled: StoryObj<RequiredMark> = {
  args: {
    required: false,
    filled: true,
  },
};
