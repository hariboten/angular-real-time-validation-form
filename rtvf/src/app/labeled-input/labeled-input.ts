import { Component, input } from '@angular/core';
import { RequiredMark } from '../required-mark/required-mark';

@Component({
  selector: 'app-labeled-input',
  imports: [RequiredMark],
  templateUrl: './labeled-input.html',
  styleUrl: './labeled-input.scss',
})
export class LabeledInput {
  label = input.required<string>();
  required = input<boolean>(false);
  filled = input<boolean>(false);
  errorMessages = input<string[]>([]);
}
