import { Meta, StoryObj } from '@storybook/angular';
import { LabeledDateInput } from './labeled-date-input';

export default {
  title: 'Components/LabeledDateInput',
  component: LabeledDateInput,
} as Meta<LabeledDateInput>;

export const Date00Default: StoryObj<LabeledDateInput> = {
  args: {
    name: 'default',
    label: 'Default',
    value: null,
  },
};

export const Date01InitialValue: StoryObj<LabeledDateInput> = {
  args: {
    name: 'initial',
    label: 'Initial',
    value: new Date('2023-01-01'),
  },
};

export const Date02Required: StoryObj<LabeledDateInput> = {
  args: {
    name: 'required',
    label: 'Required',
    value: null,
    required: true,
  },
};

export const Date03Filled: StoryObj<LabeledDateInput> = {
  args: {
    name: 'filled',
    label: 'Filled',
    value: new Date('2023-01-01'),
    required: true,
  },
};
