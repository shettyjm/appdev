import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityrankscorsComponent } from './cityrankscors.component';

describe('CityrankscorsComponent', () => {
  let component: CityrankscorsComponent;
  let fixture: ComponentFixture<CityrankscorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityrankscorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityrankscorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
