import { TestBed } from '@angular/core/testing';
import { SampleFormState } from './sample-form-state';
import { SampleFormValidator } from './sample-form-validator';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SampleFormValidator', () => {
  let validator: SampleFormValidator;
  let state: SampleFormState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        SampleFormState,
        SampleFormValidator,
      ],
    });

    state = TestBed.inject(SampleFormState);
    validator = TestBed.inject(SampleFormValidator);
  });

  it('#hasTitleValue should be true when title is not blank', () => {
    state.title.set('Test Title');
    expect(validator.hasTitleValue()).toBeTrue();
  });

  it('#hasTitleValue should be false when title is blank', () => {
    state.title.set(' ');
    expect(validator.hasTitleValue()).toBeFalse();
  });

  it('#hasDateValue should be true when date is not null', () => {
    state.date.set(new Date('2023-10-01'));
    expect(validator.hasDateValue()).toBeTrue();
  });

  it('#hasDateValue should be false when date is null', () => {
    state.date.set(null);
    expect(validator.hasDateValue()).toBeFalse();
  });
});
