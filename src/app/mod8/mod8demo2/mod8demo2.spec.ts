import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod8demo2 } from './mod8demo2';

describe('Mod8demo2', () => {
  let component: Mod8demo2;
  let fixture: ComponentFixture<Mod8demo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod8demo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod8demo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
