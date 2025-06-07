import { Meta, StoryObj } from '@storybook/angular';
import { LabeledInput } from './labeled-input';

export default {
  title: 'Components/LabeledInput',
  component: LabeledInput,
} as Meta<LabeledInput>;

export const Default: StoryObj<LabeledInput> = {
  render: (args) => ({
    props: args,
    template: `
      <app-labeled-input [label]="label">
        <input type="text" placeholder="Enter text here" />
      </app-labeled-input>
    `,
  }),
  args: {
    label: 'Example Input',
  },
};
