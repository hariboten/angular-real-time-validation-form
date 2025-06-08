import { Component, effect, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  imports: [FormsModule],
  templateUrl: './date-input.html',
  styleUrl: './date-input.scss',
})
export class DateInput {
  readonly name = input.required<string>();
  value = model<Date | null>(null);

  setValue(date: Date | null) {
    this.value.set(date);
  }
}
