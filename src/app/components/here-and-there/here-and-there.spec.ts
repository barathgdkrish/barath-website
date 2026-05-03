import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereAndThere } from './here-and-there';

describe('HereAndThere', () => {
  let component: HereAndThere;
  let fixture: ComponentFixture<HereAndThere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HereAndThere],
    }).compileComponents();

    fixture = TestBed.createComponent(HereAndThere);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
