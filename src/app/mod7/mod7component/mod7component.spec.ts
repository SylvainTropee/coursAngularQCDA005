import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod7component } from './mod7component';

describe('Mod7component', () => {
  let component: Mod7component;
  let fixture: ComponentFixture<Mod7component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod7component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod7component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
