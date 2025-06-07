import { Component, model } from '@angular/core';

@Component({
  selector: 'app-date-input',
  imports: [],
  templateUrl: './date-input.html',
  styleUrl: './date-input.scss',
})
export class DateInput {
  name = model<string>('');
  value = model<Date | null>(null);
}
