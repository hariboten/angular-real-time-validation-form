import { provideZonelessChangeDetection } from '@angular/core';
import { SampleForm, SampleFormModel } from './sample-form';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SampleForm', () => {
  let component: SampleForm;
  let fixture: ComponentFixture<SampleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleForm],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should output SampleFormModel on submit', async () => {
    // Titleに入力
    const titleInput = fixture.nativeElement.querySelector(
      'input[name="title"]'
    );
    titleInput.value = 'Test Title';
    titleInput.dispatchEvent(new Event('input'));

    // Dateに入力
    const dateInput = fixture.nativeElement.querySelector('input[name="date"]');
    dateInput.value = '2023-10-01';
    dateInput.dispatchEvent(new Event('input'));

    // Submitボタンをクリック
    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );
    let submittedValue: SampleFormModel | undefined;
    component.submitted.subscribe((value) => {
      submittedValue = value;
    });

    submitButton.click();

    // 入力内容がemitされる
    expect(submittedValue).toEqual({
      title: 'Test Title',
      date: new Date('2023-10-01'),
    });
  });
});
