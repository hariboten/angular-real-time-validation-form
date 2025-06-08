import { Injectable, signal } from '@angular/core';
import { SampleFormModel } from './sample-form';

@Injectable({ providedIn: 'root' })
export class SampleFormState {
  public title = signal<string>('');
  public date = signal<Date | null>(null);

  public setValues(values: SampleFormModel): void {
    this.title.set(values.title);
    this.date.set(values.date);
  }

  public getValues(): SampleFormModel {
    return {
      title: this.title(),
      date: this.date(),
    };
  }
}
