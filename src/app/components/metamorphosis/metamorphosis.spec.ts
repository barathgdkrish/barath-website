import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metamorphosis } from './metamorphosis';

describe('Metamorphosis', () => {
  let component: Metamorphosis;
  let fixture: ComponentFixture<Metamorphosis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metamorphosis],
    }).compileComponents();

    fixture = TestBed.createComponent(Metamorphosis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
