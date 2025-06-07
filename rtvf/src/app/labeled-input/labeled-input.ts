import { Component, input } from '@angular/core';
import { RequiredMark } from '../required-mark/required-mark';

@Component({
  selector: 'app-labeled-input',
  imports: [RequiredMark],
  templateUrl: './labeled-input.html',
  styleUrl: './labeled-input.scss',
})
export class LabeledInput {
  readonly label = input.required<string>();
  readonly required = input<boolean>(false);
  readonly filled = input<boolean>(false);
}
