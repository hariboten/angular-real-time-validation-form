import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  label = input('');
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
  value = input('');
  clicked = output<void>();
}
