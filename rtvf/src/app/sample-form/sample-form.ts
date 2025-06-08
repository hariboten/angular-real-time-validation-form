import { Component, output, input, OnInit, inject } from '@angular/core';
import { Button } from '../button/button';
import { FormsModule } from '@angular/forms';
import { LabeledInput } from '../labeled-input/labeled-input';
import { TextInput } from '../text-input/text-input';
import { DateInput } from '../date-input/date-input';
import { SampleFormState } from './sample-form-state';
import { SampleFormValidator } from './sample-form-validator';

export interface SampleFormModel {
  title: string;
  date: Date | null;
}

@Component({
  selector: 'app-sample-form',
  imports: [Button, FormsModule, LabeledInput, TextInput, DateInput],
  templateUrl: './sample-form.html',
  styleUrl: './sample-form.scss',
})
export class SampleForm implements OnInit {
  /** フォームの値 */
  state = inject(SampleFormState);

  /** フォームの初期値 */
  readonly initial = input<SampleFormModel>({
    title: '',
    date: null,
  });
  ngOnInit(): void {
    this.state.setValues(this.initial());
  }

  /** Submitボタンを押した */
  submitted = output<SampleFormModel>();
  submit(): void {
    this.submitted.emit(this.state.getValues());
  }

  /** バリデーションを提供するサービス */
  validator = inject(SampleFormValidator);
}
