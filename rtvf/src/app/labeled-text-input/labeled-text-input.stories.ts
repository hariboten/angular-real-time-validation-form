import { Meta, StoryObj } from '@storybook/angular';
import { LabeledTextInput } from './labeled-text-input';

export default {
  title: 'Components/LabeledTextInput',
  component: LabeledTextInput,
} as Meta<LabeledTextInput>;

export const Text00Default: StoryObj<LabeledTextInput> = {
  args: {
    name: 'default',
    label: 'Default',
    value: '',
  },
};

export const Text01InitialValue: StoryObj<LabeledTextInput> = {
  args: {
    name: 'initial',
    label: 'Initial',
    value: 'test',
  },
};

export const Text02PlaceHolder: StoryObj<LabeledTextInput> = {
  args: {
    name: 'placeholder',
    label: 'Placeholder',
    placeholder: 'Enter text here',
  },
};

export const Text03Required: StoryObj<LabeledTextInput> = {
  args: {
    name: 'required',
    label: 'Required',
    required: true,
  },
};

export const Text04Filled: StoryObj<LabeledTextInput> = {
  args: {
    name: 'filled',
    label: 'Filled',
    value: 'filled',
    required: true,
  },
};
