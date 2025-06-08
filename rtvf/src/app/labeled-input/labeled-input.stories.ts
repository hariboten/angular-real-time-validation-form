import { Meta, StoryObj } from '@storybook/angular';
import { LabeledInput } from './labeled-input';

export default {
  title: 'Components/LabeledInput',
  component: LabeledInput,
} as Meta<LabeledInput>;

export const Labeled00Default: StoryObj<LabeledInput> = {
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

export const Labeled01Required: StoryObj<LabeledInput> = {
  render: (args) => ({
    props: args,
    template: `
      <app-labeled-input [label]="label" required="true">
        <input type="text" placeholder="Enter text here" />
      </app-labeled-input>
    `,
  }),
  args: {
    label: 'Example Input',
  },
};

export const Labeled02ErrorMessage: StoryObj<LabeledInput> = {
  render: (args) => ({
    props: args,
    template: `
      <app-labeled-input [label]="label" [errorMessages]="errorMessages">
        <input type="text" placeholder="Enter text here" />
      </app-labeled-input>
    `,
  }),
  args: {
    label: 'Error messages',
    errorMessages: ['This field is required.', 'Invalid input format.'],
  },
};
