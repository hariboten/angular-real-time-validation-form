import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredMark } from './required-mark';

describe('RequiredMark', () => {
  let component: RequiredMark;
  let fixture: ComponentFixture<RequiredMark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequiredMark]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequiredMark);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
