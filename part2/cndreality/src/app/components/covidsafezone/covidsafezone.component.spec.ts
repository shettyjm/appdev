import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidsafezoneComponent } from './covidsafezone.component';

describe('CovidsafezoneComponent', () => {
  let component: CovidsafezoneComponent;
  let fixture: ComponentFixture<CovidsafezoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidsafezoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidsafezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
