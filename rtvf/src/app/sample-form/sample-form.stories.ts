import { Meta, StoryObj } from '@storybook/angular';
import { SampleForm } from './sample-form';

export default {
  title: 'Forms/SampleForm',
  component: SampleForm,
} as Meta<SampleForm>;

export const Default: StoryObj<SampleForm> = {
  args: {},
};
