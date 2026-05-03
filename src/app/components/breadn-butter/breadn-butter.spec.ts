import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadnButter } from './breadn-butter';

describe('BreadnButter', () => {
  let component: BreadnButter;
  let fixture: ComponentFixture<BreadnButter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadnButter],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadnButter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
