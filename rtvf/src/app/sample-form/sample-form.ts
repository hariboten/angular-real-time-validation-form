import {
  Component,
  computed,
  output,
  signal,
  input,
  OnInit,
} from '@angular/core';
import { Button } from '../button/button';
import { FormsModule } from '@angular/forms';
import { LabeledInput } from '../labeled-input/labeled-input';
import { TextInput } from '../text-input/text-input';
import { isNotBlank } from '../string-utils';
import { DateInput } from '../date-input/date-input';

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
  // 初期値
  readonly initial = input<SampleFormModel>({
    title: '',
    date: null,
  });

  // フォームの値
  title = signal(this.initial().title);
  date = signal<Date | null>(this.initial().date);

  ngOnInit(): void {
    this.title.set(this.initial().title);
    this.date.set(this.initial().date);
  }

  // 送信イベント
  submitted = output<SampleFormModel>();

  submit(): void {
    this.submitted.emit(this.sampleForm());
  }

  readonly sampleForm = computed<SampleFormModel>(() => {
    return {
      title: this.title(),
      date: this.date(),
    };
  });

  // バリデーション
  hasTitleValue = computed(() => {
    return isNotBlank(this.title());
  });

  hasDateValue = computed(() => {
    const value = this.date();
    return value !== null && !isNaN(value.getTime());
  });
}
