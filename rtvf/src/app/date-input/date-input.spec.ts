import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateInput } from './date-input';
import { provideZonelessChangeDetection } from '@angular/core';

describe('DateInput', () => {
  let component: DateInput;
  let fixture: ComponentFixture<DateInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateInput],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(DateInput);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('name', 'test-date-input');
    fixture.whenStable();
  });

  it('can be input date', () => {
    // value Eventを監視
    let emittedValue: Date | null = null;
    component.value.subscribe((value) => {
      emittedValue = value;
    });

    // 日付を入力
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = '2023-10-12';
    inputElement.dispatchEvent(new Event('input'));

    // signalが更新される
    expect<Date | null>(emittedValue).toEqual(new Date('2023-10-12'));
  });
});
