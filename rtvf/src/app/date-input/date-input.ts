import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  imports: [FormsModule],
  templateUrl: './date-input.html',
  styleUrl: './date-input.scss',
})
export class DateInput {
  name = model<string>('');
  value = model<Date | null>(null);
}
