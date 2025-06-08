import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should click', () => {
    const button = fixture.nativeElement.querySelector('button');

    let clicked = false;
    component.clicked.subscribe(() => {
      clicked = true;
    });
    button.click();

    expect(clicked).toBeTrue();
  });

  it('should not be clicked when disabled', async () => {
    const button = fixture.nativeElement.querySelector('button');
    // disabledを設定
    fixture.componentRef.setInput('disabled', true);
    await fixture.whenStable();

    let clicked = false;
    component.clicked.subscribe(() => {
      clicked = true;
    });
    button.click();

    expect(clicked).toBeFalse();
  });
});
