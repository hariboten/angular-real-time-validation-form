import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledInput } from './labeled-input';
import { provideZonelessChangeDetection } from '@angular/core';

describe('LabeledInput', () => {
  let component: LabeledInput;
  let fixture: ComponentFixture<LabeledInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabeledInput],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(LabeledInput);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'test label');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
