import { Meta, StoryObj } from '@storybook/angular';
import { DateInput } from './date-input';

export default {
  title: 'Components/DateInput',
  component: DateInput,
} as Meta<DateInput>;

export const Date00Default: StoryObj<DateInput> = {
  args: {
    value: new Date(),
  },
};

export const Date01InitialValue: StoryObj<DateInput> = {
  args: {
    value: new Date('2023-01-01'),
  },
};
