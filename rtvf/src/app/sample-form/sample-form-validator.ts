import { computed, inject, Injectable } from '@angular/core';
import { isNotBlank } from '../string-utils';
import { SampleFormState } from './sample-form-state';
import { strMaxLen } from '../validation-utils';

@Injectable({ providedIn: 'root' })
export class SampleFormValidator {
  private state = inject(SampleFormState);

  public hasTitleValue = computed(() => {
    return isNotBlank(this.state.title());
  });

  public titleErrorMessages = computed(() => {
    const title = this.state.title();
    let messages: string[] = [];
    if (!strMaxLen(title, 10)) {
      messages.push(`Title must be at most 10 characters long.`);
    }
    return messages;
  });

  public hasDateValue = computed(() => {
    const value = this.state.date();
    return value !== null && !isNaN(value.getTime());
  });

  public dateErrorMessages = computed(() => {
    let messages: string[] = [];
    return messages;
  });

  public isValid = computed(() => {
    return (
      this.hasTitleValue() &&
      this.hasDateValue() &&
      this.titleErrorMessages().length === 0 &&
      this.dateErrorMessages().length === 0
    );
  });
}
