import { Component, computed, input, model } from '@angular/core';
import { DateInput } from '../date-input/date-input';
import { LabeledInput } from '../labeled-input/labeled-input';

@Component({
  selector: 'app-labeled-date-input',
  imports: [DateInput, LabeledInput],
  templateUrl: './labeled-date-input.html',
  styleUrl: './labeled-date-input.scss',
})
export class LabeledDateInput {
  readonly name = input.required<string>();
  readonly label = input.required<string>();
  readonly required = input<boolean>(false);
  value = model<Date | null>(null);

  hasValue = computed(() => {
    const value = this.value();
    return value !== null && !isNaN(value.getTime());
  });
}
