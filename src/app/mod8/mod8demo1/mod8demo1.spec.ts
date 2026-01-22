import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod8demo1 } from './mod8demo1';

describe('Mod8demo1', () => {
  let component: Mod8demo1;
  let fixture: ComponentFixture<Mod8demo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod8demo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod8demo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
