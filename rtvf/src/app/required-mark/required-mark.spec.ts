import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredMark } from './required-mark';
import { provideZonelessChangeDetection } from '@angular/core';

describe('RequiredMark', () => {
  let component: RequiredMark;
  let fixture: ComponentFixture<RequiredMark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequiredMark],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(RequiredMark);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should show mark when required and empty', async () => {
    fixture.componentRef.setInput('required', true);
    fixture.componentRef.setInput('filled', false);
    await fixture.whenStable();

    const markElement = fixture.nativeElement;
    expect(getComputedStyle(markElement).visibility).toBe('visible');
  });

  it('should show mark when required and not empty', async () => {
    fixture.componentRef.setInput('required', true);
    fixture.componentRef.setInput('filled', true);
    await fixture.whenStable();

    // グレーで表示される
    const markElement = fixture.nativeElement;
    expect(getComputedStyle(markElement).visibility).toBe('visible');
  });

  it('should not show mark when not required', async () => {
    fixture.componentRef.setInput('required', false);
    fixture.componentRef.setInput('filled', false);
    await fixture.whenStable();

    const markElement = fixture.nativeElement;
    expect(getComputedStyle(markElement).visibility).toBe('hidden');
  });
});
