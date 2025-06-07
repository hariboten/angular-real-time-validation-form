import { Component, computed, input, model } from '@angular/core';
import { TextInput } from '../text-input/text-input';
import { LabeledInput } from '../labeled-input/labeled-input';
import { isNotBlank } from '../string-utils';

@Component({
  selector: 'app-labeled-text-input',
  imports: [TextInput, LabeledInput],
  templateUrl: './labeled-text-input.html',
  styleUrl: './labeled-text-input.scss',
})
export class LabeledTextInput {
  readonly label = input.required<string>();
  readonly name = input.required<string>();
  readonly value = model<string>('');
  readonly placeholder = input('');
  readonly required = input<boolean>(false);

  hasValue = computed(() => {
    const value = this.value();
    return isNotBlank(value);
  });
}
