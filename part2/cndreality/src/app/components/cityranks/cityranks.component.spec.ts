import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityranksComponent } from './cityranks.component';

describe('CityranksComponent', () => {
  let component: CityranksComponent;
  let fixture: ComponentFixture<CityranksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityranksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityranksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
