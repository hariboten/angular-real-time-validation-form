import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInput } from './text-input';
import { provideZonelessChangeDetection } from '@angular/core';

describe('TextInput', () => {
  let component: TextInput;
  let fixture: ComponentFixture<TextInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInput],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TextInput);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('name', 'test-input');
    await fixture.whenStable();
  });

  it('can be input', () => {
    // value Eventを監視
    let emittedValue: string | null = null;
    component.value.subscribe((value) => {
      emittedValue = value;
    });

    // 日付を入力
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'test input';
    inputElement.dispatchEvent(new Event('input'));

    // signalが更新される
    expect<string | null>(emittedValue).toEqual('test input');
  });
});
