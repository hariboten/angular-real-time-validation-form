import { Component, effect, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  imports: [FormsModule],
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss',
})
export class TextInput {
  readonly value = model<string>('');
  readonly name = input.required<string>();
  readonly placeholder = input('');
}
