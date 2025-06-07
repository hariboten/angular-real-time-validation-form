import { Component, computed, output, signal } from '@angular/core';
import { TextInput } from '../text-input/text-input';
import { DateInput } from '../date-input/date-input';
import { Button } from '../button/button';
import { FormsModule } from '@angular/forms';
import { LabeledInput } from '../labeled-input/labeled-input';

interface SampleFormModel {
  title: string;
  date: Date | null;
}

@Component({
  selector: 'app-sample-form',
  imports: [TextInput, Button, FormsModule, DateInput, LabeledInput],
  templateUrl: './sample-form.html',
  styleUrl: './sample-form.scss',
})
export class SampleForm {
  title = signal('');
  date = signal<Date | null>(null);
  submitted = output<SampleFormModel>();

  readonly sampleForm = computed<SampleFormModel>(() => {
    return {
      title: this.title(),
      date: this.date(),
    };
  });

  submit(): void {
    alert('Form submitted!\n' + JSON.stringify(this.sampleForm(), null, 2));
    this.submitted.emit(this.sampleForm());
  }
}
