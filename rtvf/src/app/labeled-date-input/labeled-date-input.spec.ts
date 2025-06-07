import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledDateInput } from './labeled-date-input';

describe('LabeledDateInput', () => {
  let component: LabeledDateInput;
  let fixture: ComponentFixture<LabeledDateInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabeledDateInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabeledDateInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
