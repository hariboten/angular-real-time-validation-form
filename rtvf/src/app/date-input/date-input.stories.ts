import { Meta, StoryObj } from '@storybook/angular';
import { DateInput } from './date-input';

export default {
  title: 'Components/DateInput',
  component: DateInput,
} as Meta<DateInput>;

export const Date00Default: StoryObj<DateInput> = {
  args: {
    name: 'default',
    value: null,
  },
};

export const Date01InitialValue: StoryObj<DateInput> = {
  args: {
    name: 'initial',
    value: new Date('2023-01-01'),
  },
};
