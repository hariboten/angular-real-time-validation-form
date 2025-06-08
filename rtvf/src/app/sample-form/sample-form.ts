import { Component, computed, output, signal } from '@angular/core';
import { Button } from '../button/button';
import { FormsModule } from '@angular/forms';
import { LabeledInput } from '../labeled-input/labeled-input';
import { TextInput } from '../text-input/text-input';
import { isNotBlank } from '../string-utils';
import { DateInput } from '../date-input/date-input';

interface SampleFormModel {
  title: string;
  date: Date | null;
}

@Component({
  selector: 'app-sample-form',
  imports: [Button, FormsModule, LabeledInput, TextInput, DateInput],
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

  hasTitleValue = computed(() => {
    return isNotBlank(this.title());
  });

  hasDateValue = computed(() => {
    const value = this.date();
    return value !== null && !isNaN(value.getTime());
  });
}
