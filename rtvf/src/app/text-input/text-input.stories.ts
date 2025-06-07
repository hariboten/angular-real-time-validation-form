import { Meta, StoryObj } from '@storybook/angular';
import { TextInput } from './text-input';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta<TextInput>;

export const Text00Default: StoryObj<TextInput> = {
  args: {
    name: 'default',
    value: '',
  },
};

export const Text01InitialValue: StoryObj<TextInput> = {
  args: {
    name: 'initial',
    value: 'test',
  },
};

export const Text01PlaceHolder: StoryObj<TextInput> = {
  args: {
    name: 'placeholder',
    placeholder: 'Enter text here',
  },
};
