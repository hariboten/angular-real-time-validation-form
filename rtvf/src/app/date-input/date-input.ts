import { Component, model } from '@angular/core';

@Component({
  selector: 'app-date-input',
  imports: [],
  templateUrl: './date-input.html',
  styleUrl: './date-input.scss',
})
export class DateInput {
  value = model<Date | null>(null);
}
