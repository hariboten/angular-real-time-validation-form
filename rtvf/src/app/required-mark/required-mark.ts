import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'app-required-mark',
  imports: [],
  templateUrl: './required-mark.html',
  styleUrl: './required-mark.scss',
})
export class RequiredMark {
  readonly required = input<boolean>(false);
  readonly filled = input<boolean>(false);

  @HostBinding('class.required')
  get isRequired() {
    return this.required();
  }

  @HostBinding('class.filled')
  get isFilled() {
    return this.filled();
  }
}
