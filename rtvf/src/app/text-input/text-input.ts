import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-text-input',
  imports: [],
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss',
})
export class TextInput {
  readonly value = model<string>('');
  readonly name = input<string>('');
  readonly placeholder = input('');
}
