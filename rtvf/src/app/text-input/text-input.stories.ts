import { Meta, StoryObj } from '@storybook/angular';
import { TextInput } from './text-input';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta<TextInput>;

export const Text00Default: StoryObj<TextInput> = {
  args: {
    value: '',
  },
};

export const Text01InitialValue: StoryObj<TextInput> = {
  args: {
    value: 'test',
  },
};
