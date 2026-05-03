import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barath101 } from './barath101';

describe('Barath101', () => {
  let component: Barath101;
  let fixture: ComponentFixture<Barath101>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Barath101],
    }).compileComponents();

    fixture = TestBed.createComponent(Barath101);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
