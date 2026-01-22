import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod8demo3 } from './mod8demo3';

describe('Mod8demo3', () => {
  let component: Mod8demo3;
  let fixture: ComponentFixture<Mod8demo3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod8demo3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod8demo3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
