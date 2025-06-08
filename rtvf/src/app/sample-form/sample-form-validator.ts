import { computed, inject, Injectable } from '@angular/core';
import { isNotBlank } from '../string-utils';
import { SampleFormState } from './sample-form-state';

@Injectable({ providedIn: 'root' })
export class SampleFormValidator {
  private state = inject(SampleFormState);

  public hasTitleValue = computed(() => {
    return isNotBlank(this.state.title());
  });

  public hasDateValue = computed(() => {
    const value = this.state.date();
    return value !== null && !isNaN(value.getTime());
  });
}
