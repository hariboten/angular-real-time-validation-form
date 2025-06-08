import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SampleForm } from './sample-form';
import { SampleFormValidator } from './sample-form-validator';
import { SampleFormState } from './sample-form-state';

export default {
  title: 'Forms/SampleForm',
  component: SampleForm,
  decorators: [
    moduleMetadata({
      providers: [SampleFormState, SampleFormValidator],
    }),
  ],
} as Meta<SampleForm>;

const submittionRender = (args: any) => ({
  props: {
    submittedData: null,
    ...args,
  },
  template: `
      <app-sample-form [initial]="initial" [test]="test" (submitted)="submittedData = $event"></app-sample-form>
      <div *ngIf="submittedData">
        <h3>Submitted Data:</h3>
        <pre>{{ submittedData | json }}</pre>
      </div>
    `,
});

export const SampleForm00Default: StoryObj<SampleForm> = {
  render: submittionRender,
};

export const SampleForm01InitialValues: StoryObj<SampleForm> = {
  render: submittionRender,
  args: {
    initial: {
      title: 'Initial Title',
      date: new Date('2023-01-02'),
    },
  },
};
